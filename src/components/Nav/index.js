import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                  <NavLink
                    onClick={() => {
                      setCurrentCategory(category.name);
                    }}
                    className={'nav-link'} activeClassName={`${
                      currentCategory === category.name && 'navActive'
                    }`}
                    to={`/${category.name}`}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </NavLink>
                </li>
              ))}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' className='list-nav'>
                <List />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='list-navItem'><NavLink to={'/about'}>About Me</NavLink></Dropdown.Item>
                <Dropdown.Item className='list-navItem'><NavLink to={'/portfolio'}>
                  Portfolio
                </NavLink></Dropdown.Item>
                <Dropdown.Item className='list-navItem'><NavLink to={'/contact'}>Contact</NavLink></Dropdown.Item>
                <Dropdown.Item className='list-navItem'><NavLink to={'/resume'}>Resume</NavLink></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <ul className='nav'>
            <Link to='/'>
              <img
                className='logo'
                src={require('../../assets/images/logo.png')}
                alt='logo'
              />
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
