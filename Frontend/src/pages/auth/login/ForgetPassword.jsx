import TextInput from "@/components/textInput/TextInput";
import { authApi } from "@/services/authAPI";
import { baseUrl } from "@/services/baseUrl";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { PuffLoader } from "react-spinners";
import { toast } from "sonner";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const forgetPasswordApi = async () => {
    if (!email) {
      return setError("Email is required");
    }

    if (!password) {
      return setPasswordError("Password is required");
    }
    try {
      setloading(true);
      const response = await fetch(`${baseUrl}/auth/${authApi.FORGET_PASS}`, {
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
        navigate("/auth/login");
      } else {
        toast.error(data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error forgetpassword:", error.message);
    } finally {
      setloading(false);
    }
  };

  return (
      <div className="bg-white rounded-2xl p-2 w-[420px]">
        <div className="p-2  space-y-3">
          <h1 className="text-[20px] font-medium">Create your new password</h1>
          <h2 className="text-gray-600 text-[14px]">
            Set a new, secure password to protect your account, you can use it
            to log in once updated
          </h2>

          <div className="space-y-2.5 mt-4">
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />
            <label className="font-medium text-[13px]">Create password</label>
            <div
              className={`border p-[8px] hover:bg-gray-50 rounded-md flex items-center justify-between pr-3 transition-all duration-200 mt-1 mb-0 ${
                passwordError ? "border-red-500" : "border-gray-200"
              }`}
            >
              <input
                className={"outline-none text-[14px] w-full px-1"}
                placeholder="Enter your new password"
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
          </div>

          <button
            disabled={loading}
            onClick={forgetPasswordApi}
            className={`secondary-btn text-[16px]  w-full  ${
              loading ? "opacity-90" : "opacity-100"
            } font-medium text-white mt-4`}
          >
            {loading ? (
              <PuffLoader color="white" size={24} />
            ) : (
              "Forget password"
            )}
          </button>
          <Link
            to="/auth/login"
            className="primary-btn text-[16px] font-medium text-black  flex w-full justify-center items-center "
          >
            Cancel
          </Link>
        </div>
      </div>
  );
};

export default ForgetPassword;
