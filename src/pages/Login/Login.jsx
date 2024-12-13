import React, { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../context";

const Login = () => {
  const { loginUser, loginInformation, updateInformationLogin } =
    useContext(AuthContext);
  return (
    <div className="container-login">
      <div className="login-form">
        <div>
          <h2 className="text-uppercase text-h2">Đăng nhập</h2>
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label className="label-email">Email</label>
              <input
                className="input-login"
                type="email"                
                onChange={(e) => updateInformationLogin({...loginInformation, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="input-login"
                type="password"                
                onChange={(e) => updateInformationLogin({...loginInformation, password: e.target.value})}
                required
              />
            </div>
            <button className="text-uppercase button-login" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
