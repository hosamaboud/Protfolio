import { motion } from 'framer-motion';

const Services = () => {
 return (
  <div id="services" className="section services">
   <h2 className="section__title">Services</h2>
   <span className="section__subtitle">What I offer</span>
   <div className="container grid section__border services__container">
    {[
     {
      icon: 'ri-layout-4-line',
      title: 'UI/UX Designer',
      description:
       'I specialize in creating visually appealing and user-friendly interfaces for your digital products.',
     },
     {
      icon: 'ri-code-view',
      title: 'Website Design',
      description:
       'I specialize in creating visually appealing and user-friendly interfaces for your digital products.',
     },
     {
      icon: 'ri-quill-pen-ai-line',
      title: 'Digital Animator',
      description:
       'I specialize in creating visually appealing and user-friendly interfaces for your digital products.',
     },
    ].map((service, index) => (
     <motion.div
      key={index}
      className="service__card"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
     >
      <i className={service.icon}></i>
      <h2 className="service__title">
       {service.title.split(' ').map((word, i) => (
        <span key={i}>
         {word}
         {i < service.title.split(' ').length - 1 && <br />}
        </span>
       ))}
      </h2>
      <span className="service__description">{service.description}</span>
      <div className="service__border"></div>
     </motion.div>
    ))}
   </div>
  </div>
 );
};

export default Services;
