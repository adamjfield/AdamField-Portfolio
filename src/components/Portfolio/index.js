import React, { useState } from 'react';

function Portfolio() {
  const techLogos = [
    'html',
    'css',
    'javascript',
    'node',
    'mysql',
    'sequelize',
    'mongodb',
    'mongoose',
    'react',
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
      tech: ['Materialize CSS, ', 'Edamam Recipe API, ', 'The Movie Database API'],
    },
  ]);

  return (
    <section>
      <h2>Some of my skills</h2>
      <div className='tech-div'>
        {techLogos.map((techLogo) => (
          <div className='tech-logo-back'>
            <img
              className='tech-logo'
              src={require(`../../assets/images/${techLogo}.png`)}
              alt={techLogo}
              key={techLogo}
            />
          </div>
        ))}
      </div>
      <h2>My Work</h2>
      <div className='projects-div'>
        {projects.map((project, i) => (
          <div className='project-tile'>
            <div className='project-title'>
              <h3>{project.name}</h3>
              <h6>{project.tech}</h6>
            </div>
            <img
              className='project-img'
              src={require(`../../assets/images/${project.file}.png`)}
              alt={project.file}
              key={project.name}
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
