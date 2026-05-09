import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import Dark from "./Dark";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white">
      <div className=" max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">ABC School</h1>
            <div className="flex items-center gap-2 text-xl cursor-pointer">
              <Dark />
            </div>
          </div>
          <div>
            <ul className="hidden sm:flex gap-6 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="sm:hidden flex items-center relative z-50">
              Menu<MdMenu onClick={() => setOpen(!open)} />
              {open && (
                <ul className="fixed top-8 left-1/2 transform -translate-x-1/2  flex flex-col gap-6 font-medium mt-10">
                  <li>
                    <Link to="/" className="bg-gray-200 rounded-2xl p-2 px-10">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="bg-gray-200 rounded-2xl p-2 px-10">About</Link>
                  </li>
                  <li>
                    <Link to="/login" className="bg-gray-200 rounded-2xl p-2 px-10">Login</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="bg-gray-200 rounded-2xl p-2 px-8">Contact</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
