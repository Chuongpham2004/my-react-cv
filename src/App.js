import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <section className="section" id="about">
          <div className="container">
            <div className="grid two">
              <div>
                <h3>Giới thiệu</h3>
                <p>
                  Mình là sinh viên năm 4 tại VNU-IS ngành Công nghệ Thông tin, GPA hiện tại 3.2, dự kiến tốt nghiệp năm 2026. Đồng thời đang học lập trình tại Aptech với trọng tâm Java và phát triển backend.
                </p>
              </div>
              <div>
                <h3>Mục tiêu</h3>
                <ul className="list">
                  <li>Thực tập/Junior Backend Java (Spring Boot)</li>
                  <li>Tham gia xây dựng API, tối ưu hoá CSDL</li>
                  <li>Trau dồi clean code, testing và DevOps cơ bản</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
