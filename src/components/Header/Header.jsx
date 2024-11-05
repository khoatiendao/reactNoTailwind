import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-black">
          <h2 className="header-title text-capitalize">
            Find your book of choice
          </h2>
          <br />
          <p className="header-text fs-26 fw-7 text-capitalize">
            Finding books has become incredibly convenient in the digital age.
            Online platforms and digital libraries offer extensive catalogs
            where users can search for books by title, author, genre, or
            keywords.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
