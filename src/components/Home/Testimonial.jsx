import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import waves_img from '../../assets/images/img-portfolio/shape-wawes.svg';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
 const testimonials = [
  {
   text:
    '“Working with Chris gave me a great impression. I completed my project at a good cost with excellent quality and attention. Highly recommended!”',
   name: 'Klay Harris',
   company: 'Client',
  },
  {
   text:
    '“An excellent experience! The team delivered more than expected, and I was impressed with the professionalism. Highly professional and reliable.”',
   name: 'Sarah Brown',
   company: 'Designer',
  },
  {
   text:
    "“Great attention to detail and fantastic delivery. I couldn't be happier with the results!”",
   name: 'James Cooper',
   company: 'Developer',
  },
  {
   text:
    '“Outstanding service with a personal touch. Highly recommended for any creative projects!”',
   name: 'Emily Wilson',
   company: 'Freelancer',
  },
 ];

 return (
  <div className="section testimonial">
   <motion.div
    className="container section__border"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
   >
    <div className="testimonial__container">
     <motion.h2
      className="section__title"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
     >
      Testimonial
     </motion.h2>
     <motion.span
      className="section__subtitle"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
     >
      My clients feedback
     </motion.span>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
     >
      {testimonials.map((item, index) => (
       <SwiperSlide key={index}>
        <motion.div
         className="testimonial__item"
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6, delay: index * 0.2 }}
         viewport={{ once: true }}
        >
         <p className="testimonial__description">{item.text}</p>
         <div className="item__info">
          <span className="testimonial__name">{item.name}</span>
          <span className="testimonial__subtitle">{item.company}</span>
         </div>
        </motion.div>
       </SwiperSlide>
      ))}
     </Swiper>
     <img className="test_img" src={waves_img} alt="waves img" />
     <div className="swiper-button-prev"></div>
     <div className="swiper-button-next"></div>
    </div>
   </motion.div>
  </div>
 );
};

export default Testimonial;
