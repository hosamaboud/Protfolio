import Navbar from "../components/Utils/NavbarHome";
import "../assets/css/home.css";
import HomeMain from "../components/Home/HomeMain";
import Skills from "../components/Home/Skills";
import Qualification from "../components/Home/Qualification";
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Testimonial from "../components/Home/Testimonial";
import Contact from "../components/Home/Contact";
import Footer from "../components/Utils/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerBorder = document.getElementById("header");

      const scrollUp = document.getElementById("scroll_up");
      if (window.scrollY >= 50) {
        scrollUp.classList.add("show_scroll_up");
        headerBorder.classList.add("bg_header");
      } else {
        scrollUp.classList.remove("show_scroll_up");
        headerBorder.classList.remove("bg_header");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />

      <main className="main">
        <section id="home" className="home section">
          <HomeMain />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="qualification">
          <Qualification />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <a href="#home" className="scroll_up" id="scroll_up">
        <i className="ri-arrow-up-circle-line"></i>
      </a>
    </>
  );
};

export default Home;
