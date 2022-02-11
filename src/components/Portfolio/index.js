import React from 'react';

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
        <div className='project-tile'>
          <div className='project-title'>
            <h3>Project Name</h3>
            <h6>Project Tech Used</h6>
          </div>
          <img
            className='project-img'
            src={require('../../assets/images/travel-blog.png')}
          />
            <button className='btn btn-lg btn-outline-danger tile-btn'>
              Learn More
            </button>
        </div>
        <div className='project-tile'>
          <div className='project-title'>
            <h3>Project Name</h3>
            <h6>Project Tech Used</h6>
          </div>
          <img
            className='project-img'
            src={require('../../assets/images/weather-dashboard.png')}
          />
            <button className='btn btn-lg btn-outline-danger tile-btn'>
              Learn More
            </button>
        </div>
        <div className='project-tile'>
          <div className='project-title'>
            <h3>Project Name</h3>
            <h6>Project Tech Used</h6>
          </div>
          <img
            className='project-img'
            src={require('../../assets/images/dinner-movie.png')}
          />
            <button className='btn btn-lg btn-outline-danger tile-btn'>
              Learn More
            </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
