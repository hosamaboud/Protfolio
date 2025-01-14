import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="project__content"
    >
      <img
        src={project.img}
        alt={project.title}
        className="project__img"
        loading="lazy"
      />
      <div className={`${active ? "project_info" : "hidden"}`}>
        <h3 className="project__title">{project.title}</h3>
        <span className="project__subtitle">{project.subtitle}</span>
        <div className="project__buttons">
          <Link to={project.link} className="project__btn">
            Demo <i className="ri-arrow-right-line"></i>
          </Link>
          <Link to={project.github} className="project__btn_git">
            <i className="ri-github-fill"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
