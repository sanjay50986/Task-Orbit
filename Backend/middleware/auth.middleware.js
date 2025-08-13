import jwt from "jsonwebtoken"
import { UserModel } from "../models/user.model.js"
import { STATUS_CODE } from "../utils/statusCode.js";

export const verifyToken = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res
            .status(STATUS_CODE.UNAUTHORIZED)
            .json({ message: "Not authorized, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);     
        console.log(decoded.id)   
        const user = await UserModel.findById(decoded.id).select("-password");

        if (!user) {
            return res
                .status(STATUS_CODE.UNAUTHORIZED)
                .json({ message: "Not authorized, user not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        res
            .status(STATUS_CODE.UNAUTHORIZED)
            .json({ message: "Not authorized, token failed" });
    }
};
