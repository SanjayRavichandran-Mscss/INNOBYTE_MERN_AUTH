import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State to track which link is active
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle click event and set active link
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="py-0.1">
      <Link
        className={`px-5 pb-2 border-b border-gray-400 ${
          activeLink === 1 ? "text-orange-500 text-md" : ""
        }`}
        to="/register"
        onClick={() => handleLinkClick(1)}
      >
        Register
      </Link>

      <Link
        className={`px-5 pb-2 border-b border-gray-400 ${
          activeLink === 0 ? "text-orange-500 text-md" : ""
        }`}
        to="/"
        onClick={() => handleLinkClick(0)}
      >
        Home
      </Link>

      <Link
        className={`px-5 pb-2 border-b border-gray-400 ${
          activeLink === 2 ? "text-orange-500 text-md" : ""
        }`}
        to="/login"
        onClick={() => handleLinkClick(2)}
      >
        Login
      </Link>

      <Link
        className={`px-5 pb-2 border-b border-gray-400 ${
          activeLink === 3 ? "text-orange-500 text-md" : ""
        }`}
        to="/dashboard"
        onClick={() => handleLinkClick(3)}
      >
        Dashboard
      </Link>
    </nav>
  );
}
