import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../../service/data-service";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success("Account created! Please verify the email");
    },
  });

  return { signup, isLoading };
}
