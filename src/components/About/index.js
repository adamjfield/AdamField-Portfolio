import React from 'react';
import { ArrowDownSquare } from 'react-bootstrap-icons';

function About() {
  return (
    <section className='hero'>
      <div className=''>
        <div>
          <h1 className='large-heading'>
            Hi, I'm <span className='hero-name'>Adam Field.</span>
          </h1>
        </div>
        <div className='large-heading' style={{ marginLeft: 100 }}>
          <h2>I am a web developer</h2>
        </div>
        <div className='small-heading'>
          <p>
            I'm a full stack web developer the enjoys building functional and
            user friendly applications. I am currently seeking new opportunities
            to so feel free to reach out here{' '}
            <span>
              <ArrowDownSquare />
            </span>
          </p>
        </div>
        <div>
          <button type='button' className='btn btn-outline-danger contact-btn'>
            Contact Me
          </button>
        </div>
      </div>
      <div className='bitmoji'>
        <img
          className=''
          src={require('../../assets/images/bitmoji.png')}
          alt='bitmoji icon'
        />
      </div>
    </section>
  );
}

export default About;
