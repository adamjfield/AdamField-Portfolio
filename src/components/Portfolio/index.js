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
          <div>
              
          </div>
    </section>
  );
}

export default Portfolio;
