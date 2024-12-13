import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import TypewriterComponent from "typewriter-effect";
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
          <TypewriterComponent
            options={{ 
              strings: ["Nền tảng trực tuyến và thư viện kỹ thuật số cung cấp các danh mục phong phú nơi người dùng có thể tìm kiếm sách theo tiêu đề, tác giả hoặc từ khóa."],
              autoStart: true,
              loop: true,
              delay: 80
             }}
          />
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
