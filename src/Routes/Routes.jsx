import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import CreateStore from "../pages/CreateStore";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AddProduct from "../Dashboard/AddProduct";
import UploadProduct from "../components/UploadProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-store",
        element: (
          <PrivetRoute>
            <CreateStore></CreateStore>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/admin/dashboard/upload-product",
        element: <UploadProduct></UploadProduct>,
      },
      {
        path: "/admin/dashboard",
        element: <></>,
      },
    ],
  },
]);
export default router;
