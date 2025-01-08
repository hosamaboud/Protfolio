import { motion } from 'framer-motion';
import shape_dot from '../../assets/images/img-portfolio/shape-circle.svg';

const Qualification = () => {
 return (
  <div id="qualification" className="qualification section">
   <motion.h2
    className="section__title"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
   >
    Qualifications
   </motion.h2>
   <motion.span
    className="section__subtitle"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
   >
    Experience & education
   </motion.span>

   <div className="qua__container container grid section__border">
    <div className="qua__content">
     <motion.span
      className="qua__title"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
     >
      <i className="ri-pencil-ruler-2-line"></i>Education
     </motion.span>

     <motion.div
      className=" qua__data"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
     >
      <h3 className="qua__name">Bachelor of Commerce</h3>
      <span className="qua__country">El-AZher- University</span>
      <span className="qua__year">2018-2022</span>
     </motion.div>

     <motion.div
      className=" qua__data"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
     >
      <h3 className="qua__name">Self-Learning in Web Development</h3>
      <span className="qua__country">Udemy & YouTube Courses</span>
      <span className="qua__year">2022 - Present</span>
     </motion.div>

     <motion.div
      className=" qua__data"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
     >
      <h3 className="qua__name">Advanced Frontend Development</h3>
      <span className="qua__country">Coursera & FreeCodeCamp</span>
      <span className="qua__year">2023 - 2024</span>
     </motion.div>
    </div>
    <div className="qua__content">
     <motion.span
      className="qua__title"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
     >
      <i className="ri-building-line"></i>Work
     </motion.span>

     <motion.div
      className=" qua__data"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
     >
      <h3 className="qua__name">Frontend Developer</h3>
      <span className="qua__country">Monkey Nird</span>
      <span className="qua__year">2023 - 2024</span>
     </motion.div>
    </div>
   </div>
   <img src={shape_dot} alt="" className="qua__img" />
  </div>
 );
};

export default Qualification;
