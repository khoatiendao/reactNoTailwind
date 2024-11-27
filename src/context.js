// import { jwtDecode } from 'jwt-decode';
import React, { useState, createContext, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_USER } from './utils/constant';
// import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInformation, setRegisterInformation] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    ward: '',
    district: '',
    city: '',
  });

  const [loginInformation, setLoginInformation] = useState({
    email: '',
    password: ''
  })

  // const navigate = useNavigate();

  // const getUserId = () => {
  //   const token = localStorage.getItem('User');
  //   if (!token) return null;
  //   const decodedToken = jwtDecode(token);
  //   return decodedToken._id;
  // };

  const updateRegisterInformation = useCallback((info) => {
    setRegisterInformation(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await fetch(`${URL_USER}/register`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(registerInformation)
        })

      if (!response.ok) {
        alert('Đăng ký thất bại');
      }

      alert('Đăng ký thành công')
    },
    [registerInformation]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInformation,
        updateRegisterInformation,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
