import ProjectCard from "./ProjectCard";
import pro_1 from "../../assets/images/img-portfolio/coffee.png";
import pro_2 from "../../assets/images/img-portfolio/Znoon.png";
import pro_3 from "../../assets/images/img-portfolio/react.png";
import pro_4 from "../../assets/images/img-portfolio/dash.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: pro_1,
      title: "Coffee Shop",
      subtitle: "Web",
      link: "https://coffee-ecru.vercel.app/",
      github: "https://github.com/hosamaboud/coffee-main",
    },
    {
      img: pro_2,
      title: "ECommerce Store",
      subtitle: "Web",
      link: "https://brand-liard.vercel.app/",
      github: "https://github.com/hosamaboud/Brand",
    },
    {
      img: pro_3,
      title: "First Project with React",
      subtitle: "Web",
      link: "https://when-i-learn-react.vercel.app/",
    },
    {
      img: pro_4,
      title: "Dashboard",
      subtitle: "Web",
      link: "https://dashbord-omega-five.vercel.app/",
      github: "https://github.com/hosamaboud/Dashbord",
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
      { breakpoint: 1025, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Projects;
