import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownSquare } from 'react-bootstrap-icons';

function About() {
  return (
    <section className='hero'>
      <div>
        <div>
          <h1 className='large-heading'>
            Hi, my name is <span className='hero-name'>Adam Field.</span>
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
          <Link to='/contact'>
            <button
              type='button'
              className='btn btn-outline-danger contact-btn'
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={require('../../assets/images/bitmoji-big.png')}
          alt='bitmoji icon'
          className='bitmoji'
        />
      </div>
    </section>
  );
}

export default About;
