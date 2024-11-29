import { axiosWithConfig } from "@/services/axios-with-config"
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, { message: "Userame must be at least 3 characters" }).max(30, { message: "Userame must be at most 30 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(30, { message: "Password must be at most 30 characters" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }).max(30, { message: "Password must be at most 30 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const fetchRegister = async (data: z.infer<typeof registerSchema>) => {
    const response = await axiosWithConfig.post("/register", data); // Menggunakan serverless API proxy
    return response.data;
};


export const useRegister = () => {
    return useMutation({
        mutationFn: fetchRegister,
        onSuccess: () => {
            toast.success("Registration successful");
        },
        onError: (error) => {
            if (error instanceof AxiosError && error.response) {
                const errorMessage =
                    error.response.data?.message || "Something went wrong";
                toast.error(errorMessage);
            } else {
                toast.error("Something went wrong");
            }
        },
    });
};