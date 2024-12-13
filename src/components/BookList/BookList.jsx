import React, { useCallback, useEffect, useState } from "react";
// import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverBook from "../../assets/image/coverBook.jpg"
import "./BookList.css";
import { useSearchParams } from "react-router-dom";
import { URL } from "../../utils/constant";

const BookList = () => {
  const [params] = useSearchParams();

  const search = params.get("s");

  const [resultTitle, setResultTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBook = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/search?title=${search}`);
      const data = await response.json();
      const { book } = data;
      if (Array.isArray(book) && book.length) {
        const newBooks = book.slice(0, 20).map((bookSingle) => {
          return {
            id: bookSingle._id,
            title: bookSingle.title,
            image: bookSingle.image,
            author: bookSingle.author_id?.name,
            translator: bookSingle.translator_id?.name,
            genre: bookSingle.genre_id?.name,
            publisher: bookSingle.publisher_id?.name,
            publisher_year: bookSingle.publisher_year,
            isbn_10: bookSingle.isbn_10,
            isbn_13: bookSingle.isbn_13,
          };
        });

        setBooks(newBooks);

        if (newBooks.length >= 1) {
          setResultTitle("Your search result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchBook();
  }, [search, fetchBook]);

  const bookWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      cover_img: singleBook?.image || coverBook,
      title: singleBook.title,
      author: singleBook.author,
      translator: singleBook.translator,
      genre: singleBook.genre,
      publisher: singleBook.publisher,
      publisher_year:
      singleBook.publisher_year && !isNaN(new Date(singleBook.publisher_year).getFullYear())
          ? new Date(singleBook.publisher_year).getFullYear()
          : "Unknown Year",
      isbn_10: singleBook.isbn_10,
      isbn_13: singleBook.isbn_13,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {bookWithCovers.slice(0, 20).map((item, index) => {
            return <Book key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
