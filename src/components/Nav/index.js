import React from 'react';
import { List } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
  return (
    <header>
      <div className='nav-container'>
        <div className='navbar '>
          <ul>
            <div className='nav lg-nav'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#about'>
                  About Me
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#resume'>
                  Resume
                </a>
              </li>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' className='list-nav'>
                <List/>
              </Dropdown.Toggle> 
              <Dropdown.Menu>
                <Dropdown.Item href='#about'>About Me</Dropdown.Item>
                <Dropdown.Item href='#portfolio'>Portfolio</Dropdown.Item>
                <Dropdown.Item href='#contact'>Contact</Dropdown.Item>
                <Dropdown.Item href='#resume'>Resume</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <ul className='nav'>
            <a href='/'>
              <img
                className='logo'
                src={require('../../assets/images/logo.png')}
                alt='logo'
              />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
