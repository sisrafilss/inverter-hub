import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import LoginPage from "../pages/Login";
import RegistrationPage from "../pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegistrationPage />,
      },
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <DashboardLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "",
  //       element: (
  //         <PrivateRoute>
  //           <Dashboard />
  //         </PrivateRoute>
  //       ),
  //     },

  //   ],
  // },
]);
