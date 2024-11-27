import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
// import coverImg from "../../assets/image/coverBook.jpg";
import coverBook from "../../assets/image/coverBook.jpg"
import "./BookDetail.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { URL } from "../../utils/constant";

const BookDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}/${id}`);
        const data = await response.json();
        console.log("dataaa", data.book);

        if (data) {
          const {
            title,
            image,
            author_id,
            translator_id,
            publisher_id,
            publisher_year,
          } = data.book;
          const newBook = {
            title: title,
            image: image || coverBook,
            author_id: author_id?.name,
            translator_id: translator_id?.name,
            publisher_id: publisher_id?.name,
            publisher_year:
              publisher_year && !isNaN(new Date(publisher_year).getFullYear())
                ? new Date(publisher_year).getFullYear()
                : "Unknown Year",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go back</span>
        </button>
        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.image} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span className="fw-6 fs-24">{book?.author_id}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Dịch giả: </span>
              <span className="text-italic">{book?.translator_id}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Nhà xuất bản: </span>
              <span className="text-italic">{book?.publisher_id}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Năm xuất bản: </span>
              <span>{book?.publisher_year}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
