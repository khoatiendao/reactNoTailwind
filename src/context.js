import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';
const url = 'https://openlibrary.org/search.json?title=';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Once upon a time');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBook = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

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
