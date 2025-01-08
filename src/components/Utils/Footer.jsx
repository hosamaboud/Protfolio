import { motion } from 'framer-motion';

const Footer = () => {
 return (
  <footer className="footer">
   <motion.div
    className="footer__container container"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
   >
    <motion.h1
     className="footer__title"
     initial={{ opacity: 0, y: -30 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.2 }}
    >
     Hossam<i className="ri-code-s-slash-line"></i>
    </motion.h1>
    <motion.p
     className="footer__subtitle"
     initial={{ opacity: 0, y: -30 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.4 }}
    >
     Web_Dev
     <i className="ri-parentheses-line"></i>
     <i className="ri-equal-line"></i>
     <i className="ri-arrow-right-s-line"></i>
    </motion.p>
    <motion.ul
     className="footer__list"
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.6 }}
    >
     <li className="footer__link">
      <a href="#home">
       <i className="ri-home-5-line"></i>Home
      </a>
     </li>
     <li className="footer__link">
      <a href="#skills">
       <i className="ri-trophy-line"></i>Skills
      </a>
     </li>
     <li className="footer__link">
      <a href="#projects">
       <i className="ri-window-fill"></i>Projects
      </a>
     </li>
    </motion.ul>
    <motion.ul
     className="footer__social"
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.8 }}
    >
     <a href="hoss" className="footer__social__link">
      <i className="ri-facebook-circle-line"></i>
     </a>
     <a href="hoss" className="footer__social__link">
      <i className="ri-linkedin-box-line"></i>
     </a>
     <a href="hoss" className="footer__social__link">
      <i className="ri-github-fill"></i>
     </a>
    </motion.ul>
    <motion.span
     className="footer__copy"
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 1 }}
    >
     &copy; {new Date().getFullYear()} Hossam. All rights reserved.
    </motion.span>
   </motion.div>
  </footer>
 );
};

export default Footer;
