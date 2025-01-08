import { motion } from "framer-motion";
import html from "../../assets/images/img-portfolio/html-1.svg";
import css from "../../assets/images/img-portfolio/css-3.svg";
import bootstrab from "../../assets/images/img-portfolio/bootstrap .svg";
import js from "../../assets/images/img-portfolio/logo-javascript.svg";
import react from "../../assets/images/img-portfolio/react-2.svg";
import redux from "../../assets/images/img-portfolio/redux.svg";
import tailwind from "../../assets/images/img-portfolio/tailwind.svg";
import github from "../../assets/images/img-portfolio/git-icon.svg";
import figma from "../../assets/images/img-portfolio/figma-1.svg";
import teamworkImage from "../../assets/images/img-portfolio/teamwork.svg";
import Adaptability from "../../assets/images/img-portfolio/Adaptability.svg";
import Communication from "../../assets/images/img-portfolio/Comm.svg";
import Creativity from "../../assets/images/img-portfolio/Creativity.svg";
import problemSolving from "../../assets/images/img-portfolio/problem-solving.svg";
import Management from "../../assets/images/img-portfolio/Management.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills section">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favorite skills</span>
      <div className="container grid section__border skills_container">
        <motion.div
          className="skills__content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="skills__title">
            <i className="ri-braces-line"></i>Frontend Developer
          </h3>

          <div className="skills__info">
            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="skills__blob">
                <img src={html} alt="HTML" />
              </div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="skills__blob">
                <img src={css} alt="CSS" />
              </div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="skills__blob">
                <img src={bootstrab} alt="bootstrab" />
              </div>
              <h3 className="skills__name">Bootstrab</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="skills__blob">
                <img src={tailwind} alt="Tailwind" />
              </div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="skills__blob">
                <img src={js} alt="JavaScript" />
              </div>
              <h3 className="skills__name">JS</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="skills__blob">
                <img src={react} alt="React" />
              </div>
              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="skills__blob">
                <img src={redux} alt="Redux" />
              </div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="skills__blob">
                <img src={github} alt="GitHub" />
              </div>
              <h3 className="skills__name">GitHub</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="skills__blob">
                <img src={figma} alt="Figma" />
              </div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="skills__content"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="skills__title">
            <i className="ri-user-smile-line"></i> Soft Skills
          </h3>

          <div className="skills__info">
            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="skills__blob">
                <img src={teamworkImage} alt="Teamwork" />
              </div>
              <h3 className="skills__name">Teamwork</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="skills__blob">
                <img src={Communication} alt="Communication" />
              </div>
              <h3 className="skills__name">Communication</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="skills__blob">
                <img src={problemSolving} alt="Problem Solving" />
              </div>
              <h3 className="skills__name">Problem Solving</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="skills__blob">
                <img src={Adaptability} alt="Adaptability" />
              </div>
              <h3 className="skills__name">Adaptability</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="skills__blob">
                <img src={Creativity} alt="Creativity" />
              </div>
              <h3 className="skills__name">Creativity</h3>
              <span className="skills__subtitle">Intermediate</span>
            </motion.div>

            <motion.div
              className="skills__data"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="skills__blob">
                <img src={Management} alt="Management" />
              </div>
              <h3 className="skills__name">Management</h3>
              <span className="skills__subtitle">Advanced</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
