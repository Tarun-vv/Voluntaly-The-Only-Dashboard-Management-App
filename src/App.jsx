import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard.jsx";
import AppLayout from "./components/AppLayout";
import Campaigns from "./features/campaigns/Campaigns";
import Events from "./features/events/Events";
import Users from "./features/users/Users";
import Profile from "./features/profile/Profile";
import CampaignAnalytics from "./features/campaigns/CampaignAnalytics";
import CampaignDataset from "./features/campaigns/CampaignDataset";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import UserAnalytics from "./features/users/UserAnalytics";
import UserDataset from "./features/users/UserDataset";
import Login from "./features/auth/login/Login";
import ProtectedRoutes from "./features/auth/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#F8FAFC",
            color: "#64748B",
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />}>
              <Route index element={<Navigate replace to="analytics" />} />
              <Route path="analytics" element={<CampaignAnalytics />} />
              <Route path="dataset" element={<CampaignDataset />} />
            </Route>
            <Route path="/events" element={<Events />} />
            <Route path="/users" element={<Users />}>
              <Route index element={<Navigate replace to="analytics" />} />
              <Route path="analytics" element={<UserAnalytics />} />
              <Route path="dataset" element={<UserDataset />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
