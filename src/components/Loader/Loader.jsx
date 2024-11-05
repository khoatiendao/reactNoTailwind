import React from "react";
// import LoaderImg from "../../assets/image/coverBook.jpg";
import "./Loader.css"

const Loader = () => {
  return (
    // <div className='loader flex flex-c'>
    //   <img src={LoaderImg} alt="loader" />
    // </div>
    <div className="container_book_loader loader">
      <div className="book">
        <div className="page"></div>
        <div className="page backPage"></div>
        <div className="page pageFlip"></div>
        <div className="page pageFlip"></div>
        <div className="page pageFlip"></div>
      </div>
    </div>
  );
};

export default Loader;
