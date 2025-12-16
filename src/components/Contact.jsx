import React from 'react';
import SectionTitle from './SectionTitle';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle subtitle="Liên hệ" title="Kết nối với mình" />
        <div className="contact">
          <p className="lead">Mở nhận thực tập/backend Java. Rất mong được kết nối!</p>
          <div className="contact-grid">
            <a className="contact-item" href="mailto:hoangchuong869@gmail.com" target="_blank" rel="noreferrer">
              <span className="contact-label">Email</span>
              <span>hoangchuong869@gmail.com</span>
            </a>
            <a className="contact-item" href="https://github.com/Chuongpham2004" target="_blank" rel="noreferrer">
              <span className="contact-label">GitHub</span>
              <span>https://github.com/Chuongpham2004</span>
            </a>
            <a className="contact-item" href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span>linkedin.com/in/your-linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



