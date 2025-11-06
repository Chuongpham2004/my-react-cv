import React from 'react';
import SectionTitle from './SectionTitle';

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle subtitle="Dự án" title="Một số dự án học tập" />
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3>Student Manager API</h3>
              <span className="badge">Java • Spring Boot</span>
            </div>
            <p className="muted">REST API CRUD quản lý sinh viên, xác thực JWT, JPA/Hibernate.</p>
            <ul className="list">
              <li>Endpoints: /students, /auth</li>
              <li>Tech: Spring Security, MySQL, JPA</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Library Service</h3>
              <span className="badge">Java • Spring • JPA</span>
            </div>
            <p className="muted">Dự án mini mượn/trả sách, phân quyền role, test cơ bản.</p>
            <ul className="list">
              <li>Tech: Spring Data JPA, H2, JUnit</li>
              <li>Tool: Maven, Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;


