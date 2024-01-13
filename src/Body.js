import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Body = () => {
  return (
    <div className="text-white bg-theme-black-900 min-h-[100vh]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
