import React, { useState, createContext, useCallback, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { URL_USER } from './utils/constant';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const success = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
const failed = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

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
    password: '',
  });

  const [userId, setUserId] = useState("");
  const getUserId = () => {
    const token = localStorage.getItem('User');
    if (!token) return null;
    const decodedToken = jwtDecode(token);
    return decodedToken._id;
  };

  useEffect(() => {
    const id = getUserId();
    if(id) setUserId(id)
  },[])

  const [username, setUsername] = useState("");
  const getUserName = () => {
    const token = localStorage.getItem('User');
    
    if(!token) return null;
    try {
      const decodedToken = jwtDecode(token);      
      return decodedToken.fullName;
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const name = getUserName();
    if(name) setUsername(name);
  },[])

  const updateRegisterInformation = useCallback((info) => {
    setRegisterInformation(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await fetch(`${URL_USER}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerInformation),
      });

      if (!response.ok) {
        failed('Đăng ký thất bại')
      }

      success('Đăng ký thành công');
    },
    [registerInformation]
  );

  const updateInformationLogin = useCallback((info) => {
    setLoginInformation(info);
  }, []);

  let navigate = useNavigate();

  const loginUser = useCallback(async (e) => {
      e.preventDefault();
      const response = await fetch(`${URL_USER}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInformation)
      });

      if (!response.ok) {
        failed('Đăng nhập thất bại');
      }
      const userData = await response.json()
      success('Đăng nhập thành công');
      localStorage.setItem('User', JSON.stringify(userData));
      navigate('/')
      setUser(userData);
    },
    [loginInformation, navigate]
  );

  // const verifyUser = useCallback(async(e) => {
  //   e.preventDefault();
  //   const response = await
  // })

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInformation,
        updateRegisterInformation,
        registerUser,
        loginUser,
        loginInformation,
        updateInformationLogin,
        username,
        userId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
