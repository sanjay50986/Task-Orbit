import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { ENUM } from "../utils/enum.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,    
    },

    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      unique: true,
      required: true
    },

    phoneNumber: {
      type: Number,
      unique: true,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    profileImageUrl: {
      type: String,
      default: null,
    },

    companay: {
      type: String,
      required: true
    },

    industry: {
      type: String,
      enum: ENUM.INDUSTRIES,
      default: "Other",
      required: true
    },

    role: {
      type: String,
      enum: ENUM.ROLES,
      default: "user",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//Compare Passwords
userSchema.methods.comparePassword = async function (condidatePassword) {
  return await bcrypt.compare(condidatePassword, this.password);
};

export const UserModel = mongoose.model("User", userSchema);
