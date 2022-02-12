import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Send me a Message</h2>
      <div className='contact-div'>
        <form className='contact-form'>
          <label htmlFor='name' />
          <input type='text' placeholder='Name' />
          <label htmlFor='email' />
          <input type='text' placeholder='Email' />
          <label htmlFor='subject' />
          <input type='text' placeholder='Subject' />
          <label htmlFor='name' />
          <textarea type='text' placeholder='Message' />
          <button className='btn btn-lg btn-outline-danger contactForm-btn'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
