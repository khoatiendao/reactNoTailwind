import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';
const url = 'http://localhost:7612/api/v1/book/search?title=h';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBook = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();      
      const { booksData } = data;
      
      if (Array.isArray(booksData) && booksData.length) {
        const newBooks = booksData.slice(0, 20).map((bookSingle) => {
          return {
            id: bookSingle._id,
            title: bookSingle.title,
            author: bookSingle.author_id?.name,
            translator: bookSingle.translator_id?.name,
            genre: bookSingle.genre_id?.name,
            publisher: bookSingle.publisher_id?.name,
            publisher_year: bookSingle.publisher_year,
            isbn_10: bookSingle.isbn_10,
            isbn_13: bookSingle.isbn_13,
          };
        });
        console.log('aa',newBooks);

        setBooks(newBooks);
        

        if (newBooks.length > 1) {
          setResultTitle('Your search result');
        } else {
          setResultTitle('No Search Result Found!');
        }
      } else {
        setBooks([])
        setResultTitle("No Search Result Found!")
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBook();
  }, [searchTerm, fetchBook]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
