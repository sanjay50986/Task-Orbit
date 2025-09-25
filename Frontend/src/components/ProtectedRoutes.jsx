import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const ProtectAuth = ({ children }) => {
  const token = Cookies.get("userToken");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export const ProtectVerify = ({children}) => {
    const isOtpVerified = sessionStorage.getItem("isOtpVerified")

    if(!isOtpVerified) {
        return <Navigate to="/auth/register"/>
    }

    return children
}

export const LogoutVerify = ({children}) => {
  const token = Cookies.get("userToken");

  if(token) {
    return <Navigate to="/workspace/dashboard/" replace  />
  }

  return children
}
