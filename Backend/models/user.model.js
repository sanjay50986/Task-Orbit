import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { ENUM } from '../utils/enum.js';

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },

        lastName: {
            type: String,
        },

        email: {
            type: String,
            unique: true
        },

        phoneNumber: {
            type: Number,
            unique: true
        },

        password: {
            type: String,
        },

        profileImageUrl: {
            type: String,
            default: null
        },

        companay: {
            type: String
        },

        industry: {
            type: String,
            enum: ENUM.INDUSTRIES,
            default: "Other",
            
        },

        role: {
            type: String,
            enum: ENUM.ROLES,
            default: "user"
        }
    },
    {
        timestamps: true
    }
)

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//Compare Passwords
userSchema.methods.comparePassword = async function (condidatePassword) {
    return await bcrypt.compare(condidatePassword, this.password);
}


export const UserModel = mongoose.model("User", userSchema)

