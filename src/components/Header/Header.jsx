import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Khám phá cuốn sách hoàn hảo của bạn
          </h2>
          <br />
          <p className="header-text fs-26 fw-7 text-capitalize">
            Việc tìm sách đã trở nên vô cùng tiện lợi trong thời đại công nghệ. Nền tảng trực tuyến và thư viện kỹ thuật số cung cấp các danh
            mục phong phú nơi người dùng có thể tìm kiếm sách theo tiêu đề, tác
            giả hoặc từ khóa.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
