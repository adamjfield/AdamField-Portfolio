import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  return (
    <header>
      <div className='nav-container'>
        <div className='navbar '>
          <ul>
            <div className='nav lg-nav'>
              {categories.map((category, i) => (
                <li className={`nav-item`} key={category.name}>
                  <Link
                    onClick={() => {
                      setCurrentCategory(category.name);
                    }}
                    className={`nav-link ${
                      currentCategory === category.name && 'navActive'
                    }`}
                    to={`/${category.name}`}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </Link>
                </li>
              ))}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' className='list-nav'>
                <List />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/about'>About Me</Dropdown.Item>
                <Dropdown.Item href='/portfolio'>Portfolio</Dropdown.Item>
                <Dropdown.Item href='/contact'>Contact</Dropdown.Item>
                <Dropdown.Item href='/resume'>Resume</Dropdown.Item>
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
