import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../../utils/mutations';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    contactName: '',
    email: '',
    subject: '',
    message: '',
  });
  const { contactName, email, subject, message } = formState;
  const submitMessage = 'Your message has been sent!';
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [addContact] = useMutation(ADD_CONTACT);
  const [errorMessage, setErrorMessage] = useState('');

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
        setErrorMessage(`${e.target.id} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      const { name, value } = e.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // execute addContact mutation and pass in variable data from form
      await addContact({
        variables: { ...formState },
      });
      setMessageDisplay(true);
      setTimeout(() => setMessageDisplay(false), 3000);
      setFormState({ contactName: '', email: '', subject: '', message: '' });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section>
      <h2>Send me a Message</h2>
      <div className='contact-div'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' />
            <input
              type='text'
              name='contactName'
              id='name'
              onChange={handleChange}
              onBlur={handleChange}
              placeholder='Name'
              value={contactName}
            />
          </div>
          <div>
            <label htmlFor='email' />
            <input
              type='text'
              name='email'
              id='email'
              onChange={handleChange}
              onBlur={handleChange}
              placeholder='Email'
              value={email}
            />
          </div>
          <div>
            <label htmlFor='subject' />
            <input
              type='text'
              name='subject'
              id='subject'
              onChange={handleChange}
              onBlur={handleChange}
              placeholder='Subject'
              value={subject}
            />
          </div>
          <div>
            <label htmlFor='name' />
            <textarea
              type='text'
              name='message'
              id='message'
              rows='5'
              placeholder='Message'
              onChange={handleChange}
              onBlur={handleChange}
              value={message}
            />
          </div>
          {errorMessage && (
            <div>
              <p className='error-text'>!! {errorMessage} !!</p>
            </div>
          )}
          <button className='btn btn-lg btn-outline-danger contactForm-btn'>
            Send Message
          </button>
          {messageDisplay && (
            <div>
              <h3 className='error-text'>{submitMessage}</h3>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
