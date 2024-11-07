import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book"
import Loading from "../Loader/Loader";
import coverImg from "../../assets/image/coverBook.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const bookWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      cover_img: singleBook.cover_id ? coverImg : coverImg,
      title: singleBook.title,
      author: singleBook.author,
      translator: singleBook.translator,
      genre: singleBook.genre,
      publisher: singleBook.publisher,
      publisher_year: new Date(singleBook.publisher_year).getFullYear(), // Chuyển sang năm
      isbn_10: singleBook.isbn_10,
      isbn_13: singleBook.isbn_13,
    };
  });

  if (loading) return <Loading />;

  // console.log(bookWithCovers);
  
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {
            bookWithCovers.slice(0, 20).map((item, index) => {
              return (
                <Book key = {item.id} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default BookList;
