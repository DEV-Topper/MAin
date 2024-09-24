import { useEffect, FC, PropsWithChildren } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserCookie } from "../hooks/userHooks";
import Loading from "../page/Loading";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useUserCookie();
  console.log(data)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (typeof data?.user?._id === "undefined") {
        navigate("/auth/login");
      }
    }
  }, [data, isLoading]);

  return isLoading ? (
    <Loading />
  ) : !isLoading && typeof data?.user?._id !== "undefined" ? (
    <>{children}</>
  ) : !isLoading && typeof data?.data?.data === "undefined" ? (
    <Navigate to="/auth/login" />
  ) : (
    <Navigate to="auth/login" />
  );
};

export default PrivateRouter;
