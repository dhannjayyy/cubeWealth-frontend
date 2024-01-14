import React from "react";
import { getUser } from "../helper/userSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector(getUser)
  return (
    <nav className="bg-theme-black-700 text-white max-w-[1440px] mx-auto p-4">
      <ul className="flex justify-between items-center">
        <li>
          <h2 className="text-2xl font-bold uppercase">
            Tasks
            <br /> Manager
          </h2>
        </li>
        <li>
          <span>{user?.email}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
