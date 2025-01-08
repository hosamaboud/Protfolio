import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
 const form = useRef();
 const [messageStatus, setMessageStatus] = useState(null);

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
   .sendForm(
    'service_t5zhx1g',
    'template_ihedlr8',
    form.current,
    'PADsCMjTDS9lL_2rU',
   )
   .then(
    (result) => {
     console.log('Message sent successfully:', result.text);
     setMessageStatus('success');
     e.target.reset();
     setTimeout(() => setMessageStatus(null), 3000);
    },
    (error) => {
     console.log('An error occurred:', error.text);
     setMessageStatus('error');
     e.target.reset();
     setTimeout(() => setMessageStatus(null), 3000);
    },
   );
 };

 return (
  <div id="contact" className="contact section">
   <motion.h2
    className="section__title"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
   >
    Contact Me
   </motion.h2>
   <motion.span
    className="section__subtitle"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
   >
    Get in touch
   </motion.span>
   <div className="container section__border grid contact__container">
    <motion.div
     className="contact__content"
     initial={{ opacity: 0, x: -100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6 }}
    >
     <h3 className="contact__title">
      <i className="ri-chat-ai-line"></i>Talk to me
     </h3>
     <div className="contact__info">
      <div className="contact__item">
       <span className="contact__subtitle">Email :</span>
       <span className="contact__text">hosapoodzx@gmail.com</span>
      </div>
      <div className="contact__item">
       <span className="contact__subtitle">Whatsapp :</span>
       <span className="contact__text">+0201093095193</span>
       <a href="https://wa.me/201093095193" className="contact__btn">
        Write me<i className="ri-arrow-right-line"></i>
       </a>
      </div>
      <div className="contact__item">
       <span className="contact__subtitle">Messenger :</span>
       <span className="contact__text">https://m.me/hossam.aboud.75/</span>
       <a href="https://m.me/hossam.aboud.75/" className="contact__btn">
        Write me<i className="ri-arrow-right-line"></i>
       </a>
      </div>
     </div>
    </motion.div>

    <motion.div
     className="contact__content"
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6 }}
    >
     <h3 className="contact__title">
      <i className="ri-mail-send-line"></i>Write me your project
     </h3>
     <form ref={form} onSubmit={sendEmail} className="contact__form">
      <div className="contact__form__dev">
       <label className="contact__form_tag">Name</label>
       <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="contact__form_input"
       />
      </div>
      <div className="contact__form__dev">
       <label className="contact__form_tag">Email</label>
       <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="contact__form_input"
       />
      </div>
      <div className="contact__form__dev contact__form__area">
       <label className="contact__form_tag">Message</label>
       <textarea
        name="user_project"
        id="contact_message"
        placeholder="Write your project ...."
        className="contact__form_input"
       ></textarea>
      </div>
      <button type="submit" className="contact__btn">
       Submit<i className="ri-arrow-right-up-line"></i>
      </button>
     </form>
    </motion.div>
   </div>

   {messageStatus && (
    <motion.div
     className={`contact__status ${
      messageStatus === 'success'
       ? 'contact__status--success'
       : 'contact__status--error'
     }`}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.6 }}
    >
     {messageStatus === 'success'
      ? 'Message sent successfully ✅'
      : 'Failed to send the message ❌'}
    </motion.div>
   )}
  </div>
 );
};

export default Contact;
