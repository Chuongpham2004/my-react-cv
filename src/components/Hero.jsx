import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Xin chào, mình là <span className="accent">Phạm Hoàng Chương</span></h1>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Xem dự án</a>
            <a href="#contact" className="btn">Liên hệ</a>
          </div>
        </div>
        <div className="hero-avatar" aria-label="avatar">
          <img
            src="/avatar.jpg"
            alt="Phạm Hoàng Chương"
            className="avatar-circle object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;



