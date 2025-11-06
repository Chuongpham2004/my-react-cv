import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a href="#home" className="brand">MyCV</a>
        <nav className="nav">
          <a href="#about">Giới thiệu</a>
          <a href="#education">Học vấn</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#projects">Dự án</a>
          <a href="#contact" className="cta">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;


