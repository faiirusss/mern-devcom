import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SettingPage from "./pages/Settings";
import CreatePostPage from "./pages/Post";
import { Toaster } from "sonner";
import AccountPages from "./pages/Settings/Account";
import SettingLayout from "./features/settings/components/SettingsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/:username",
    element: <ProfilePage />,
  },
  {
    path: "/settings",
    element: <SettingLayout />,
    children: [
      {
        path: "profile",
        element: <SettingPage />,
      },
      {
        path: "account",
        element: <AccountPages />,
      },
    ],
  },
  {
    path: "/new",
    element: <CreatePostPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
