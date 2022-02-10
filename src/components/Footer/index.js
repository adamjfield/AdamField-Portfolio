import React from 'react';
import { Github, Linkedin, TelephoneOutbound, Envelope } from 'react-bootstrap-icons';

function Footer() {
  return (
    <section class='contact-me'>
      <h2>Contact Me</h2>
      <div className='contact-links'>
        <address>
          <a href='tel:9135937162'><TelephoneOutbound/></a>
          <a href='mailto:adamjfield@gmail.com'><Envelope/></a>
          <a
            href='https://github.com/adamjfield'
            target='_blank'
            rel='noreferrer'
          >
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/adamfield01/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin />
          </a>
        </address>
      </div>
    </section>
  );
}

export default Footer;
