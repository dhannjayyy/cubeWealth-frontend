import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import appStore from "../helper/Store";
import { useSelector } from "react-redux";
import { getUser } from "../helper/userSlice";
import Tasks from "../Pages/Tasks";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = useSelector(getUser);
  return (
    <>
      {appStore?.getState().user.email ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
