import React from 'react';
import SectionTitle from './SectionTitle';

function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-top">
        <span>{name}</span>
        <span className="muted">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle subtitle="Kỹ năng" title="Năng lực chuyên môn" />
        <div className="grid two">
          <div>
            <h3>Java & Backend</h3>
            <SkillBar name="Java Core / OOP" level={80} />
            <SkillBar name="Spring Boot" level={70} />
            <SkillBar name="REST API / JSON" level={75} />
            <SkillBar name="JPA / Hibernate" level={65} />
          </div>
          <div>
            <h3>Công cụ & Khác</h3>
            <SkillBar name="SQL (MySQL/PostgreSQL)" level={70} />
            <SkillBar name="Git / GitHub" level={75} />
            <SkillBar name="Maven / Gradle" level={65} />
            <SkillBar name="HTML/CSS/JS cơ bản" level={60} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;



