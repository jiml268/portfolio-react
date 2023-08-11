import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import css from './contactMe.module.css'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    from_name: "",
    from_number: "",
    from_email: "",
    message: ""
})

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebp9khi', 'template_h6h3y9c', form.current, 'di3-denRYCOyT4VXC')
      .then((result) => {
        toast.success("message sent",{theme: "colored",})
        console.log(result.text);
        setFormValues({
    from_name: "",
    from_number: "",
    from_email: "",
    message: ""
})
      }, (error) => {
        toast.error("Something went wrong please try again")
      });
  };

  return (
    <div className = "section_column" id = "contact">

    <div className={css.contact_us}>
            <h1 className = "heading">Contact me</h1>
            <form ref={form} onSubmit={sendEmail}
        className = {css.form}
            >
              <div>
                <label htmlFor="name">Your Name:</label> <br />
          <input type="text" id="name" name="from_name" value={formValues.from_name}  className={css.contact__input} onChange={(e) => setFormValues( { ...formValues, from_name: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="phone">Your Phone Number:</label> <br />
                <input type="text" name="from_number" value={formValues.from_number} id="phone"  className={css.contact__input}onChange={(e) => setFormValues( { ...formValues, from_number: e.target.value})} />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label> <br />
                <input type="text" name="from_email" value={formValues.from_email} id="email"  className={css.contact__input} onChange={(e) => setFormValues( { ...formValues, from_email: e.target.value})}/>
                <br />
              </div>
              <div>
                <label htmlFor="message">Message:</label> <br />
                <textarea
              id="message"
              value={formValues.message}
               name="message"
                
              className={css.contact__input}
              onChange={(e) => setFormValues( { ...formValues, message: e.target.value})}
                ></textarea>
              </div>
        <div className={css.div_btn}>
          <input type="submit" value="Send Request" className={css.contact1_btn} />
          
				</div>
            </form>
      </div>
       <ToastContainer />
      </div>
      )
      
}
export default ContactForm