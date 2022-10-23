import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full bg-sky-600 shadow z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <span className="text-2xl font-bold text-black italic">Emmanuel <span className="text-red-500 italic">Ala</span></span>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <XMarkIcon className="w-5 text-white" />
                  ) : (
                    <Bars3Icon className="w-8 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                open ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:text-green-500 hover:underline">
                  <Link to="/" className="text-xl">
                    Home
                  </Link>
                </li>

                <li className="text-black hover:text-green-500 hover:underline">
                  <Link to="/social" className="text-xl">
                    Projects
                  </Link>
                </li>
                <li className="text-black hover:text-green-500 hover:underline">
                  <Link to="/contact" className="text-xl">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                  <Link
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow hover:bg-green-800"
                  >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
              <Link to="/login" className="px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-green-800">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;