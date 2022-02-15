import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Modal from '../Modal';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const techLogos = [
    { name: 'html' },
    { name: 'css' },
    { name: 'javascript' },
    { name: 'node' },
    { name: 'mysql' },
    { name: 'sequelize' },
    { name: 'mongodb' },
    { name: 'mongoose' },
    { name: 'react' },
  ];

  const [projects] = useState([
    {
      name: 'Travel Blog',
      file: 'travel-blog',
      description:
        'This is a application that was created using the MVC. This is a basic CMS style blog site about your favorite destinations. You can go to the site to view current posts and comments from other travelers. By signing up or logging in you can post your own favorite destinations and upload images from your adventure. Once you are logged in you can update your post, delete your post or comment on post.',
      tech: ['Handlebars, ', 'MySQL, ', 'Sequelize, ', 'Cloudinary API'],
      github: 'https://github.com/adamjfield/Travel-Blog',
      link: 'https://travel-blog-project-2.herokuapp.com/',
    },
    {
      name: 'Weather Dashboard',
      file: 'weather-dashboard',
      description:
        'User can search any city and the application will display the current weather with temperature, wind speed, humidity, and UV index. UV index is color coded based on EPA UV index scale. When you user searches a city it will be saved below the search box as a previous searched city. When the user searches a new city it will replace the last search and the city name will be added to the previous searches. The users previous searches will be persisted to localStorage so if the window is closed and reopened the previous searches will repopulate.',
      tech: ['Bootstrap, ', 'OpenWeather API'],
      github: 'https://github.com/adamjfield/Weather-Dashboard',
      link: 'https://adamjfield.github.io/Weather-Dashboard/',
    },
    {
      name: 'Dinner and a Movie',
      file: 'dinner-movie',
      description:
        'An application that allows the user to find a movie and a meal recipe by searching for movie genre and meal type.',
      tech: [
        'Materialize CSS, ',
        'Edamam Recipe API, ',
        'The Movie Database API',
      ],
      github: 'https://github.com/adamjfield/DinnerAndAMovie',
      link: 'https://adamjfield.github.io/DinnerAndAMovie/',
    },
    {
      name: 'Budget Tracker',
      file: 'budget-tracker',
      description:
        'This is a progressive web application that allows a user to track their budget. This is a simple application that give the user the ability to add and subtract funds. This application utilizes service worker and indexedDB to allow the user to track their transactions even when offline.',
      tech: ['MongoDB, ', 'IndexedDB, ', 'Service Workers'],
      github: 'https://github.com/adamjfield/Budget-Tracker',
      link: 'https://budget-tracker-0101.herokuapp.com/',
    },
    {
      name: 'Note Taker',
      file: 'note-taker',
      description:
        'Application allows user to take notes and notes are persisted to database. User has the ability to look at previous notes or delete notes if they want to.',
      tech: ['MongoDB, ', 'IndexedDB, ', 'Service Workers'],
      github: 'https://github.com/adamjfield/Note-Taker',
    },
    {
      name: 'Team Profile Generator',
      file: 'team-generator',
      description:
        'An application that allows the user to add employees to generate a profile for team',
      tech: ['Node JS, ', 'Express, ', 'OOP'],
      github: 'https://github.com/adamjfield/Team-Profile-Generator',
    },
  ]);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <h2>Some of my skills</h2>
      <div className='tech-div'>
        {techLogos.map((techLogo, i) => (
          <div className='tech-logo-back' key={techLogo.name}>
            <img
              className='tech-logo'
              src={require(`../../assets/images/icons/${techLogo.name}.png`)}
              alt={capitalizeFirstLetter(techLogo.name)}
            />
          </div>
        ))}
      </div>
      <h2>My Work</h2>
      <div className='projects-div'>
        {projects.map((project, i) => (
          <div className='project-tile' key={project.name}>
            <div className='project-title'>
              <h3>{project.name}</h3>
              <h6>{project.tech}</h6>
            </div>
            <img
              className='project-img'
              src={require(`../../assets/images/projects/${project.file}.png`)}
              alt={project.file}
            />
            <button
              className='btn btn-lg btn-outline-danger tile-btn'
              onClick={() => toggleModal(project, i)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
