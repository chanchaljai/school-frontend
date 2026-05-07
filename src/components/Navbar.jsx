import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">ABC School</h1>
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

          <div className="sm:hidden">
            <MdMenu onClick={() => setOpen(!open)} />
            {open && (
              <ul className="flex flex-col  gap-6 font-medium">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
