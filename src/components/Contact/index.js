import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, subject, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  return (
    <section>
      <h2>Send me a Message</h2>
      <div className='contact-div'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' />
            <input type='text' name='name' onBlur={handleChange} placeholder='Name' />
          </div>
          <div>
            <label htmlFor='email' />
            <input type='text' name='email' onBlur={handleChange} placeholder='Email' />
          </div>
          <div>
            <label htmlFor='subject' />
            <input type='text' name='subject' onBlur={handleChange} placeholder='Subject' />
          </div>
           <div>
            <label htmlFor='name' />
            <textarea type='text' name='message' rows='5' placeholder='Message' onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className='error-text'>!! {errorMessage} !!</p>
            </div>
          )}
          <button className='btn btn-lg btn-outline-danger contactForm-btn'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
