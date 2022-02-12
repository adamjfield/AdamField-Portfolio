import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Send me a Message</h2>
      <div className='contact-div'>
        <form className='contact-form'>
          <label for='name' />
          <input type='text' placeholder='Name' />
          <label for='email' />
          <input type='text' placeholder='Email' />
          <label for='subject' />
          <input type='text' placeholder='Subject' />
          <label for='name' />
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
