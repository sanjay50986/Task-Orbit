import TextInput from "@/components/textInput/TextInput";
import { authApi } from "@/services/authAPI";
import { baseUrl } from "@/services/baseUrl";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { PuffLoader } from "react-spinners";
import { toast } from "sonner";
import Cookies from 'js-cookie'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginApi = async () => {
    if (!email) {
      return setError("Email is required");
    }

    if (!password) {
      return setPasswordError("Password is required");
    }
    try {
      setloading(true);
      const response = await fetch(`${baseUrl}/auth/${authApi.LOGIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        Cookies.set("userToken", data.token, {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
      } else {
        toast.error(data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error create user:", error.message);
    } finally {
      setloading(false);
    }
  };

  return (

      <div className="bg-white rounded-2xl p-2 w-[420px]">
        <div className="p-2 space-y-2">
          <h1 className="text-[20px] font-medium">Hi, welcome back!</h1>
          <h2 className="text-gray-600 text-[14px]">
            Login with your email and password you have been created before, or you can create new TaskOrbit account
          </h2>
          <button className="primary-btn space-x-3 mt-4 flex w-full justify-center items-center">
            {" "}
            <FaGoogle />
            <span className=" font-medium">Sign up with Google</span>
          </button>
          <h4 className="text-center text-gray-400 text-[13px] font-medium pt-2">
            Or continue with
          </h4>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />

          <label className="font-medium text-[13px]">Password</label>
          <div className={`border p-[8px] hover:bg-gray-50 rounded-md flex items-center justify-between pr-3 transition-all duration-200 mt-1 mb-0 ${passwordError ? "border-red-500" : "border-gray-200"}`}>
            <input
              className={"outline-none text-[14px] w-full px-1"}
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="w-[20px] h-[20px]" />
              ) : (
                <EyeOff className="w-[20px] h-[20px]" />
              )}
            </button>
          </div>
          {passwordError && (
            <span className="text-red-500 text-[12px] ">{passwordError}</span>
          )}

          <div className="flex justify-end pt-3">
            <Link
              to="/auth/forget-password"
              className="font-medium text-[13px] text-[#7575C6]"
            >
              Forget password?
            </Link>
          </div>

          <button
            disabled={loading}
            onClick={loginApi}
            className={`secondary-btn w-full text-[16px] ${
              loading ? "opacity-90" : "opacity-100"
            } font-medium text-white mt-4`}
          >
            {loading ? <PuffLoader color="white" size={24} /> : "Login now"}
          </button>
        </div>

        <div className="bg-[#f5f5f5] rounded-lg p-3 mt-2">
          <h5 className="text-gray-600 text-center text-[13px]">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-[#7575C6] font-medium">
              Create account
            </Link>
          </h5>
        </div>
      </div>
  );
};

export default Login;
