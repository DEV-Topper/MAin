import { useUserCookie } from "../hooks/userHooks";
import { RouterProvider } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import AdminDashboardRouter from "./AdminDashboardRouter";
import Loading from "../page/Loading";
import { Router } from "./Router";
import { useAdminCookie } from "../hooks/adminHook";

const RouterScreen = () => {
  const { data: userData, isLoading: isUserLoading } = useUserCookie();
  const { data: adminData, isLoading: isAdminLoading } = useAdminCookie();


  if (isUserLoading || isAdminLoading) {
    return <Loading />;
  }

  return (
    <div>
      {adminData?.admin?._id ? (
        <RouterProvider router={AdminDashboardRouter} />
      ) : typeof userData?.user?._id === "string" ? (
        <RouterProvider router={DashboardRouter} />
      ) : (
        <RouterProvider router={Router} />
      )}
    </div>
  );
};

export default RouterScreen;
