import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Finding books has become incredibly convenient in the digital age.
            Online platforms and digital libraries offer extensive catalogs
            where users can search for books by title, author, genre, or
            keywords. Many websites, like Google Books, allow users to explore
            summaries, reviews, and even preview sections of books to help them
            decide before purchasing or borrowing. Book search engines and
            library apps make it possible to locate books across genres, from
            bestsellers to rare editions, often with the option to reserve or
            order them for home delivery or pick-up at a local branch.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
