import React from 'react';
import {
  Github,
  Linkedin,
  Envelope,
} from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className='contact-me'>
      <h2>Contact Me</h2>
      <div className='contact-links'>
        <address>
          <a href='mailto:adamjfield@gmail.com'>
            <Envelope />
          </a>
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
    </footer>
  );
}

export default Footer;
