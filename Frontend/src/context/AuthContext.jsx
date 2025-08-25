import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

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
            } else {
                toast.error(data.message || "Unknown error");
            }

        } catch (error) {
            console.error("Error create user:", error.message);
        }
    };

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