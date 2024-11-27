import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
    // Bạn có thể gửi dữ liệu đăng nhập này tới API của bạn tại đây.
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="container-login">
      <div className="login-form">
        <div>
          <h2 className="text-uppercase text-h2">Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-email">Email</label>
              <input
                className="input-login"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="input-login"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="text-uppercase button-login" type="submit">
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="text-uppercase button-login"
            >
              Về trang chủ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
