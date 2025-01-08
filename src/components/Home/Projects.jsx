import pro_1 from "../../assets/images/img-portfolio/project1.jpg";
import pro_2 from "../../assets/images/img-portfolio/project2.jpg";
import pro_3 from "../../assets/images/img-portfolio/project3.jpg";
import pro_4 from "../../assets/images/img-portfolio/project4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: pro_2,
      title: "ECommerce Store",
      subtitle: "Web",
      link: "https://brand-liard.vercel.app/",
    },
    {
      img: pro_3,
      title: "first project with React",
      subtitle: "Web",
      link: "https://when-i-learn-react.vercel.app/",
    },
    {
      img: pro_4,
      title: "Coffee Shop",
      subtitle: "Web",
      link: "https://coffee-eta-lyart.vercel.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="section Projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <motion.div
        className="container section__border"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Slider {...settings} className="projects__container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project__content"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="project__img"
                  loading="lazy"
                />
              </div>
              <div className="project_info">
                <span className="project__subtitle">{project.subtitle}</span>
                <h1 className="project__title">{project.title}</h1>
                <a href={project.link} className="project__btn">
                  View demo <i className="ri-arrow-right-fill"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Projects;
