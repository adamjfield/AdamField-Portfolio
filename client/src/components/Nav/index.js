import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // useEffect(() => {
  //   const page = window.location.pathname.split('/')[2];
  //   if (page !== '') {
  //     const currentPage = document.getElementById(page);
  //     currentPage.classList = `${page} nav-link navActive`;
  //   }
  // }, [currentCategory, setCurrentCategory]);

  return (
    <header>
      <div className='nav-container'>
        <div className='navbar '>
          <ul>
            <div className='nav lg-nav'>
              {categories.map((category) => (
                <li
                  className={`nav-item`}
                  key={category.name}
                  onClick={() => {
                    setCurrentCategory(category);
                  }}
                >
                  <NavLink
                    className={`${category.name.split(' ')[0]} nav-link`}
                    id={`${category.name.split(' ')[0]}`}
                    activeClassName={`${
                      currentCategory.name === category.name && 'navActive'
                    }`}
                    to={`/${category.name.split(' ')[0]}`}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </NavLink>
                </li>
              ))}
            </div>
            <Dropdown>
              <Dropdown.Toggle className='list-nav'>
                <List />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((category) => (
                  <Dropdown.Item
                    onClick={() => {
                      setCurrentCategory(category.name);
                    }}
                    className={`${category.name.split(' ')[0]} list-navItem`}
                    as={NavLink}
                    to={`/${category.name.split(' ')[0]}`}
                    key={category.name}
                    activeClassName={`${
                      currentCategory === category.name && 'navActive'
                    }`}
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
