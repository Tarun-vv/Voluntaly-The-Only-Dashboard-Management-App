// import { Navigate, useNavigate } from "react-router-dom";
// import { useUser } from "./login/useUser";
// import { useEffect } from "react";

// function ProtectedRoutes({ children }) {
//   const navigate = useNavigate();

//   // // 1. load authenticated user
//   const { user, isLoading, isAuthenticated } = useUser();

//   // 3. if no authenticated user redirect to login page ** IMPORTANT **
//   useEffect(
//     function () {
//       if (!isAuthenticated && !isLoading) navigate("/login");
//     },
//     [isLoading, navigate, isAuthenticated]
//   );

//   // 2. while loading, make spinner
//   if (isLoading) return <h2>Loading...</h2>;

//   // 4. if there is a user, render app
//   return <div>{children}</div>;

//   // return user?.role !== "authenticated" ? (
//   //   <div>{children}</div>
//   // ) : (
//   //   <Navigate to="/login" />
//   // );
// }

// export default ProtectedRoutes;

// import { Navigate, useNavigate } from "react-router-dom";
// import { useUser } from "./login/useUser";
// import { useEffect } from "react";

// function ProtectedRoutes({ children }) {
//   const navigate = useNavigate();

//   const { user, isLoading, isAuthenticated } = useUser();

//   useEffect(() => {
//     // If user is not authenticated and not loading, redirect to login page
//     if (!isAuthenticated && !isLoading) {
//       navigate("/login");
//     }
//   }, [isLoading, navigate, isAuthenticated]);

//   // Show loading spinner while fetching user data
//   if (isLoading) return <h2>Loading...</h2>;

//   // If the user is not authenticated, return the Navigate component to redirect to login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is authenticated, render the protected content
//   return <div>{children}</div>;
// }

// export default ProtectedRoutes;

// import { Navigate, useNavigate } from "react-router-dom";
// import { useUser } from "./login/useUser";
// import { useEffect } from "react";

// function ProtectedRoutes({ children }) {
//   const navigate = useNavigate();

//   // Get user state from useUser hook
//   const { user, isLoading, isAuthenticated } = useUser();

//   useEffect(() => {
//     // If the user is not authenticated and the query is not loading, navigate to the login page
//     if (!isAuthenticated && !isLoading) {
//       navigate("/login");
//     }
//   }, [isLoading, navigate, isAuthenticated]);

//   // Show a loading message while checking authentication status
//   if (isLoading) return <h2>Loading...</h2>;

//   // If not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate replace to="/login" />;
//   }

//   // If authenticated, render the protected content
//   return <div>{children}</div>;
// }

// export default ProtectedRoutes;

// import { Navigate, useNavigate } from "react-router-dom";
// import { useUser } from "./login/useUser";
// import { useEffect } from "react";

// function ProtectedRoutes({ children }) {
//   const navigate = useNavigate();
//   const { user, isLoading, isAuthenticated } = useUser();

//   useEffect(() => {
//     // If the user is not authenticated and it's not loading, navigate to the login page
//     if (!isAuthenticated && !isLoading) {
//       navigate("/login");
//     }
//   }, [isLoading, navigate, isAuthenticated]);

//   // If loading the user data, show loading state
//   if (isLoading) return <h2>Loading...</h2>;

//   // If the user is not authenticated, redirect to login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If authenticated, render the protected content
//   return <div>{children}</div>;
// }

// export default ProtectedRoutes;

import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "./login/useUser";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <h2>Loading...</h2>;  // Show loading state while user data is being fetched

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;  // Render protected route content
}

export default ProtectedRoutes;
