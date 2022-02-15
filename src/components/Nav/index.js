import React, { useEffect } from 'react';
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
              {categories.map((category) => (
                <li className={`nav-item`} key={category.name}>
                  <NavLink
                    onClick={() => {
                      setCurrentCategory(category.name);
                    }}
                    className={'nav-link'}
                    activeClassName={`${
                      currentCategory === category.name && 'navActive'
                    }`}
                    to={`/${category.name.split(' ')[0]}`}
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
                {categories.map((category) => (
                  <Dropdown.Item
                    className='list-navItem'
                    as={Link}
                    to={`/${category.name.split(' ')[0]}`}
                    key={category.name}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </Dropdown.Item>
                ))}
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
