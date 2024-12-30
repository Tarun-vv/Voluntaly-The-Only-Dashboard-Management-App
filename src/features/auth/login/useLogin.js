// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login as loginApi } from "../../../service/data-service";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export function useLogin() {
//   const queryClient = useQueryClient(); // #fff

//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       toast.success("Successfully logged in");
//       queryClient.setQueryData(["user"], user.user); // #fff
//       navigate("/dashboard");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   return { login, isLoading };
// }

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login as loginApi } from "../../../service/data-service";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export function useLogin() {
//   const queryClient = useQueryClient(); // #fff
//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       toast.success("Successfully logged in");
//       queryClient.setQueryData(["user"], user.user);

//       // Store user data in localStorage
//       localStorage.setItem("user", JSON.stringify(user.user));

//       navigate("/dashboard");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   return { login, isLoading };
// }

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login as loginApi } from "../../../service/data-service";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export function useLogin() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       toast.success("Successfully logged in");

//       // Save user data to localStorage
//       localStorage.setItem("user", JSON.stringify(user.user));

//       // Update query data with the logged-in user
//       queryClient.setQueryData(["user"], user.user);

//       // Navigate to the dashboard after successful login
//       navigate("/dashboard");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   return { login, isLoading };
// }

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../service/data-service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Successfully logged in");

      // Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(user.user));

      // Update the query data with the logged-in user
      queryClient.setQueryData(["user"], user.user);

      // Redirect to dashboard after login
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
