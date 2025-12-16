import React from 'react';
import SectionTitle from './SectionTitle';

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionTitle subtitle="Học vấn" title="Quá trình học tập" />
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3>VNU-IS — Công nghệ Thông tin</h3>
              <span className="badge">Năm 4</span>
            </div>
            <p className="muted">GPA hiện tại: 3.2 • Dự kiến tốt nghiệp: 2026</p>
            <ul className="list">
              <li>Kiến thức nền: Java Core, OOP, Spring Boot, RESTful API</li>
              <li>Quan tâm: Backend, Hệ thống phân tán, Thiết kế API</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Aptech — Lập trình viên Java</h3>
              <span className="badge alt">Đang học</span>
            </div>
            <p className="muted">Tập trung: Java Core, OOP, Spring Boot, RESTful API</p>
            <ul className="list">
              <li>Thực hành: CRUD services, Authentication, JDBC/JPA</li>
              <li>Công cụ: Maven/Gradle, Git, Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;



