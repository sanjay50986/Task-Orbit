import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner';
import Cookies from "js-cookie";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(() => Cookies.get("userToken"))
    const [UserDetails, setUserDetails] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")
    const [industry, setIndustry] = useState("")
    const [role, setRole] = useState("")
    

    const signUpApi = async () => {
        try {
            const response = await fetch(`${baseUrl}/auth/${authApi.SIGN_UP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: Number(phoneNumber),
                    password: password,
                    companay: company ,
                    industry: industry ,
                    role: role
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("User create successfully");
                Cookies.set("userToken", data.token, {
                  expires: 7, 
                  secure: true,
                  sameSite: "Strict",
                });
            }

        } catch (error) {
            console.error("Error create user:", error.message);
        }
    };

    const fetchUserDetails = async () => {
         try {
            const response = await fetch(`${baseUrl}/auth/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()
            if(response.status === 200)
            {
                setUserDetails(data.user)
            }
         } catch (error) {
            console.error("Error fetching user details:", error.message);

         }
    }

    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                signUpApi,
                setfirstName,
                setlastName,
                setPhoneNumber,
                setPassword,
                setCompany,
                setIndustry,
                setRole,
                firstName,
                lastName,
                role,
                industry,
                company,
                password,
                phoneNumber,
                token,
                setToken,
                fetchUserDetails,
                UserDetails
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider


export const useAuthContext = () => {
    return useContext(AuthContext)
}