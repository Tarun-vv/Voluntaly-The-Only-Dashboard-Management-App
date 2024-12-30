import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../service/data-service";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if (error) throw new Error(error.message);

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}

// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../../service/data-service";

// export function useUser() {
//   // Retrieve the user from localStorage if available, otherwise make the API call
//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     initialData: storedUser || null, // If user is already in localStorage, use it as the initial data
//     refetchOnWindowFocus: false, // Prevent automatic refetching when window is focused
//   });

//   // Handle errors
//   if (error) {
//     console.error("Error fetching user:", error);
//     return { isLoading, user: null, isAuthenticated: false };
//   }

//   // If the user is not loading, but no user exists, consider them not authenticated
//   const isAuthenticated =
//     user?.role === "authenticated" || storedUser?.role === "authenticated";

//   return { isLoading, user: user || storedUser, isAuthenticated };
// }

// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../../service/data-service";

// export function useUser() {
//   // Retrieve the user from localStorage if available, otherwise make the API call
//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     initialData: storedUser || null, // Use stored user data from localStorage as the initial data
//     refetchOnWindowFocus: false, // Prevent automatic refetching when window is focused
//   });

//   // Handle errors
//   if (error) {
//     console.error("Error fetching user:", error);
//     return { isLoading, user: null, isAuthenticated: false };
//   }

//   // If the user is not loading, but no user exists, consider them not authenticated
//   const isAuthenticated =
//     user?.role === "authenticated" || storedUser?.role === "authenticated";

//   return { isLoading, user: user || storedUser, isAuthenticated };
// }

// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../../service/data-service";

// export function useUser() {
//   const storedUser = JSON.parse(localStorage.getItem("user"));  // Get user data from localStorage if available

//   // Make sure to fetch user data only if it's not present in localStorage
//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     initialData: storedUser || null,  // If storedUser exists, use it directly
//     enabled: !storedUser,  // Skip query if user is already in localStorage
//     refetchOnWindowFocus: false,  // Disable automatic refetching
//   });

//   // Handle errors and return user state
//   if (error) {
//     console.error("Error fetching user:", error);
//     return { isLoading, user: null, isAuthenticated: false };
//   }

//   // Check if the user is authenticated by looking at the role
//   const isAuthenticated = (user?.role === "authenticated" || storedUser?.role === "authenticated");

//   return { isLoading, user: user || storedUser, isAuthenticated };
// }

// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../../service/data-service";

// export function useUser() {
//   const storedUser = JSON.parse(localStorage.getItem("user"));  // Get user from localStorage if it exists

//   // If no stored user, fetch from the API
//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     enabled: !storedUser,  // Only fetch if user is not already in localStorage
//     initialData: storedUser || null,  // Use stored user as initial data if available
//     refetchOnWindowFocus: false,  // Don't refetch automatically when the window refocuses
//   });

//   // Handle error
//   if (error) {
//     console.error("Error fetching user:", error);
//     return { isLoading, user: null, isAuthenticated: false };
//   }

//   // If the user is loading or not authenticated, return isAuthenticated as false
//   const isAuthenticated = (user?.role === "authenticated" || storedUser?.role === "authenticated");

//   return { isLoading, user: user || storedUser, isAuthenticated };
// }

// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../../service/data-service";

// export function useUser() {
//   const storedUser = JSON.parse(localStorage.getItem("user")); // Retrieve from localStorage

//   // Fetch user only if not available in localStorage
//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     enabled: !storedUser, // Only fetch from API if not in localStorage
//     initialData: storedUser || null, // Use stored user data if available
//     refetchOnWindowFocus: false, // Disable automatic refetching when window refocuses
//   });

//   // Check if user is authenticated (from localStorage or API)
//   const isAuthenticated =
//     user?.role === "authenticated" || storedUser?.role === "authenticated";

//   if (error) {
//     console.error("Error fetching user:", error);
//     return { isLoading, user: null, isAuthenticated: false };
//   }

//   return { isLoading, user: user || storedUser, isAuthenticated };
// }
