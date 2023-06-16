import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi"
import { useAuth } from "../AuthContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  function getUsernameFromEmail(email) {
    const regex = /^([^@]+)@/;
    const match = email.match(regex);

    if (match && match.length > 1) {
      return match[1];
    }

    return null;
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav
      className={`navbar  fixed backdrop-blur-sm z-10 h-fit flex-col lg:flex-row border-b-2 `}
    >
      <div
        className={`flex lg:block w-full lg:w-auto justify-between  items-center ${
          visible && "mb-10"
        }  lg:mb-0`}
      >
        <Link href="/" className="logo ">
          Travelling!
        </Link>
        <button className="space-y-2 w-8 lg:hidden" onClick={toggleVisible}>
          <div className="w-full h-1 rounded-full bg-orange-500" />
          <div className="w-full h-1 rounded-full bg-orange-500" />
          <div className="w-full h-1 rounded-full bg-orange-500" />
        </button>
      </div>
      <div
        className={` list-items  ${
          visible ? " flex h-fit" : " hidden lg:flex "
        }`}
      >
        <Link className="nav-item" href="/">
          Home
        </Link>
        <Link className="nav-item" href="/interestpoints">
          Destinations
        </Link>
        <a className="nav-item" href="/#about">
          About Us
        </a>
        {user ? (
          <div className="relative inline-block select-none">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <span className="text-gray-800">
                {getUsernameFromEmail(user.email)}
              </span>
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white border border-gray-200 rounded shadow">
                <button
                  className="flex flex-row justify-center gap-4 items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                  <FiLogOut className="mr-2" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/signin" className="signup-button lg:hidden">
            Sign In
          </Link>
        )}
      </div>
      <div className={` hidden  ${visible ? "hidden lg:block " : "lg:block "}`}>
        {user ? (
          <div className="relative inline-block select-none">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <span className="text-gray-800">
                {getUsernameFromEmail(user.email)}
              </span>
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white border border-gray-200 rounded shadow">
                <button
                  className="flex flex-row justify-center gap-4 items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                  <FiLogOut className="mr-2" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/signin" className="signup-button">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
