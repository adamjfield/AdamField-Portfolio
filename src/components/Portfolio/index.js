import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
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
      description: '',
      tech: ['Handlebars, ', 'MySQL, ', 'Sequelize, ', 'Cloudinary API'],
    },
    {
      name: 'Weather Dashboard',
      file: 'weather-dashboard',
      description: '',
      tech: ['Bootstrap, ', 'OpenWeather API'],
    },
    {
      name: 'Dinner and a Movie',
      file: 'dinner-movie',
      description: '',
      tech: [
        'Materialize CSS, ',
        'Edamam Recipe API, ',
        'The Movie Database API',
      ],
    },
  ]);

  return (
    <section>
      <h2>Some of my skills</h2>
      <div className='tech-div'>
        {techLogos.map((techLogo, i) => (
          <div className='tech-logo-back' key={techLogo.name}>
            <img
              className='tech-logo'
              src={require(`../../assets/images/${techLogo.name}.png`)}
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
              src={require(`../../assets/images/${project.file}.png`)}
              alt={project.file}
            />
            <button className='btn btn-lg btn-outline-danger tile-btn'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
