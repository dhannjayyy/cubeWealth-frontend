import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { getUser } from "./helper/userSlice";

const Layout = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  return (
    <div className="text-white bg-theme-black-900 min-h-[100vh]">
      <Navbar />
      <Outlet />
      {/* {!user?.email ? <Outlet /> : navigate("/tasks")} */}
    </div>
  );
};

export default Layout;
