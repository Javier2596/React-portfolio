import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE, 
        process.env.REACT_APP_TEMPLATE, 
        form.current, 
        process.env.REACT_APP_USER
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowMessage(true); //Shows message when email is sent
        }, 
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-4">
      <h1 className="title">Send me a Message</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="py-3">
            <label className="contact">Name:</label>
            <input type="text" name="user_name" className="form-control"/>
          </div>
          <div className='py-3'>  
            <label className="contact">Email:</label>
            <input type="email" name="user_email" className="form-control"/>
          </div>
          <div className='py-3'>
            <label className="contact">Message:</label>
            <textarea name="message" className="form-control" id="exampleFormControlTextarea1"/>
          </div>
            <input type="submit" value="Send" className="btn btn-outline-danger"/> {showMessage && <p className="secti">Message Sent!</p>}
        </form>
      </div>   
    </div>
  );
};