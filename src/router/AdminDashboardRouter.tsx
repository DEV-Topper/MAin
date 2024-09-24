import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import Loading from "../page/Loading";
import AdminPrivateRouter from "./AdminPrivateRouter";
import Dashboard from "../page/admin/Dashboard";
import AdminSettings from "../page/admin/AdminSettings";
import ManageUsers from "../page/admin/ManageUsers";
import ManageTransactions from "../page/admin/ManageTransactions";
import Complaints from "../page/admin/Complaints";
import AuthLayout from "../components/layout/AuthLayout";
import AdminSignIn from "../page/auth/AdminSignIn";

const AdminDashboardRouter = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <AdminPrivateRouter>
        <AdminLayout />
      </AdminPrivateRouter>
    ),
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-transactions",
        element: <ManageTransactions />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
    ],
  },
  {
    path: "/auth/admin",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AdminSignIn />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AdminPrivateRouter>
        <AdminLayout />
      </AdminPrivateRouter>
    ),
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-transactions",
        element: <ManageTransactions />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
    ],
  },
  {
    path: "*",
    element: <Loading />,
  },
]);

export default AdminDashboardRouter;
