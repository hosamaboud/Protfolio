import { motion } from "framer-motion";
import profile from "../../assets/images/img-portfolio/perfil.png";
import shape_dot from "../../assets/images/img-portfolio/shape-circle.svg";
import shape_waves from "../../assets/images/img-portfolio/shape-wawes.svg";

const HomeMain = () => {
  return (
    <div className="container grid home__container section__border ">
      <div className="home_data grid">
        <motion.h1
          className="home__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Hossam <br />
          Frontend Developer <br />
          Based in Egypt
        </motion.h1>

        <div className="home__blob grid">
          <motion.div
            className="home__profile"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={profile}
              alt="avatar"
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.img
            src={shape_waves}
            alt="shape waves"
            className="home__shape__waves"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={shape_dot}
            alt="shape dot"
            className="home__shape__dot"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.ul
          className="home__social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="https://github.com/hosamaboud" className="home__social_link">
            <i className="ri-github-line"></i>
          </a>
          <a
            href="https://www.instagram.com/aboud.hossam/"
            className="home__social_link"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hosam-aboud-904049174"
            className="home__social_link"
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
        </motion.ul>
      </div>

      <div className=" home__info grid">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="home_info_title">Biography</h3>
          <p className="home_info_description">
            Hi, I'm Hossam, Frontend Developer. Passionate about designing
            beautiful web interfaces. Based in Cairo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="home_info_title">Services</h3>
          <p className="home_info_description">
            Website Design <br />
            Frontend Development <br />
            Animation <br />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="home_info_title">Contact</h3>
          <p className="home_info_description">
            Phone: +201093095193 <br />
            Email: hosapoodzx@gmail.com <br />
            Address: Egypt, Cairo <br />
          </p>
        </motion.div>
      </div>

      <div className="home__info">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="home_info_title">Year Of Experience</h3>
          <p className="home_info_number">08+</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="home_info_title">Completed Projects</h3>
          <p className="home_info_number">04+</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="home_info_title">Clients Worked</h3>
          <p className="home_info_number">01+</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeMain;
