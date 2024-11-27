import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';
import './index.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route index path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
