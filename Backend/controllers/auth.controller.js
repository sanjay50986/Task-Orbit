import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { UserModel } from '../models/user.model.js'
import { sendEmail } from "../utils/sendEmail.js";
import { STATUS_CODE } from "../utils/statusCode.js";
import { OtpModel } from "../models/otp.model.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Google Login
export const googleLogin = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            success: false,
            message: "Token is missing from request",
        });
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { name, email } = payload;

        const jwtToken = jwt.sign({ name, email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(STATUS_CODE.OK).json({
            success: true,
            message: "Google login successful",
            token: jwtToken,
            user: { name, email, picture },
        });
    } catch (err) {

        console.error("Google login failed", err);
        res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Invalid or expired Google token",
            error: err.message,
        });
    }
}

// Send Otp 
export const sendOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            success: false,
            message: "Email is required"
        })
    }
    const user = await UserModel.findOne({ email });
    try {

        if (user) {
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                success: false,
                message: "Email already exists"
            })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        await OtpModel.findOneAndUpdate(
            { email },
            { otp, expiresAt },
            { upsert: true, new: true }
        );


        await sendEmail(email, 'Your OTP for Registration', `Your OTP is: ${otp}`);

        return res.status(STATUS_CODE.OK).json({
            success: true,
            message: "OTP sent to email successfully",

        });

    } catch (error) {
        console.error("Error sending OTP:", error);
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}

// Verify Otp
export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {

        const otpRecord = await OtpModel.findOne({ email });


        if (!otpRecord) {
            return res.status(STATUS_CODE.NOT_FOUND).json({
                success: false,
                message: "OTP not found or already used. Please request a new one."
            });
        }

        // Check if OTP is expired
        if (otpRecord.expiresAt < new Date()) {
            await OtpModel.deleteOne({ email }); // Cleanup
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                success: false,
                message: "OTP has expired. Please request a new one."
            });
        }

        // Check if OTP matches
        if (otpRecord.otp !== otp) {
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                success: false,
                message: "Invalid OTP."
            });
        }

        await OtpModel.deleteOne({ email });

        return res.status(STATUS_CODE.OK).json({
            success: true,
            message: "OTP verified successfully.",
            email
        });


    } catch (error) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Server error during OTP verification.",
            error: error.message
        });
    }
}

// Resend Otp
export const resendOtp = async (req, res) => {
    const { email } = req.body;

    try {

        // Generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        // Upsert OTP
        await OtpModel.findOneAndUpdate(
            { email },
            { otp, expiresAt },
            { upsert: true, new: true }
        );

        // Send the OTP via email
        await sendEmail(email, "Your OTP (Resent)", `Your new OTP is: ${otp}`);

        return res.status(STATUS_CODE.OK).json({
            success: true,
            message: "OTP resent successfully."
        });

    } catch (error) {
        console.error("Resend OTP Error:", error);
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to resend OTP.",
            error: error.message
        });
    }
}

// SignUp
export const signUp = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, profileImageUrl, companay, industry, role } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            success: false,
            message: "All fields are required"
        })
    }

    try {
        const existedUser = await UserModel.findOne({ email })
        if (existedUser) {
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                success: false,
                message: "User already exists"
            })
        }

        const user = await UserModel.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            profileImageUrl,
            companay,
            industry,
            role
        })

        await user.save();

        return res.status(STATUS_CODE.CREATED).json({
            success: true,
            message: "Signup created successfully",
            user,
            token: generateToken(user._id)
        })

    } catch (error) {
        console.error("Signup failed", error);
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internel server error",
            error: error.message
        });
    }
}

// Login 
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(STATUS_CODE.UNAUTHORIZED).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(STATUS_CODE.UNAUTHORIZED).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        return res.status(STATUS_CODE.OK).json({
            success: true,
            message: "Login successful",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export const forgetPassword = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            success: false,
            message: "Email and new password are required"
        });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(STATUS_CODE.NOT_FOUND).json({
                success: false,
                message: "User not found with this email"
            });
        }


        user.password = password; 
        await user.save();

        return res.status(STATUS_CODE.OK).json({
            success: true,
            message: "Password updated successfully"
        });

    } catch (error) {
        console.error("Forget Password Error:", error);
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};