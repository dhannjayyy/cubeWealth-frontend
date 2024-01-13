import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-theme-black-700 text-white max-w-[1440px] mx-auto p-4">
      <ul className="flex justify-between items-center">
        <li>
          {/* <img
            src="https://assets-global.website-files.com/5f3f94d9ae99fbcd5528cc1f/5f3f94d9ae99fb490b28cccb_image%201.png"
            className="w-[40%]"
            alt="cube wealth icon"
          /> */}
          <h2 className="text-2xl font-bold uppercase">Tasks<br/> Manager</h2>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
