import React, { useContext } from "react";
import "./Signup.css";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { registerInformation, updateRegisterInformation, registerUser} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="container-signup">
      <div className="registration-form container">
        <h2 className="text-uppercase text-h2-signup">Đăng ký</h2>
        <form onSubmit={registerUser} method="POST">
          <div className="form-group">
            <label className="label-email-signup">Email</label>
            <input
              className="input-signup"
              type="email"
              name="email"
              onChange={(e) => updateRegisterInformation({...registerInformation, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="input-signup"
              type="password"
              name="password"
              onChange={(e) => updateRegisterInformation({...registerInformation, password: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              className="input-signup"
              type="text"
              name="fullName"
              onChange={(e) => updateRegisterInformation({...registerInformation, fullName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              className="input-signup"
              type="tel"
              name="phone"
              onChange={(e) => updateRegisterInformation({...registerInformation, phone: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ</label>
            <input
              className="input-signup"
              type="text"
              name="address"
              onChange={(e) => updateRegisterInformation({...registerInformation, address: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Phường</label>
            <input
              className="input-signup"
              type="text"
              name="ward"
              onChange={(e) => updateRegisterInformation({...registerInformation, ward: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Quận</label>
            <input
              className="input-signup"
              type="text"
              name="district"
              onChange={(e) => updateRegisterInformation({...registerInformation, district: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Thành Phố</label>
            <input
              className="input-signup"
              type="text"
              name="city"
              onChange={(e) => updateRegisterInformation({...registerInformation, city: e.target.value})}
              required
            />
          </div>
          <button className="text-uppercase button-signup" type="submit">
            Đăng ký
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="text-uppercase button-signup"
          >
            Về trang chủ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
