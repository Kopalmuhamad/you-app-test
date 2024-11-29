import { axiosWithConfig } from "@/services/axios-with-config";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const fetchLogin = async (data: z.infer<typeof loginSchema>) => {
  const response = await axiosWithConfig.post("/auth/login", data);
  return response.data;
};

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: () => {
      router.push("/");
      toast.success("Login successful");
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response) {
        const errorMessage =
          error.response.data?.message || "Something went wrong";
        toast.error(errorMessage);
      } else {
        toast.error(error.message || "Something went wrong");
      }
    },
  });
};
