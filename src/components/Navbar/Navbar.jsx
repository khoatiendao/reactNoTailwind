import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/image/logo.png";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">bookhub</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
