import React from 'react';
import { XSquare } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';

function Modal({ onClose, currentProject }) {
  const { name, file, description, github, link } = currentProject;

  const projectBtn = () => {
    window.open(link, '_blank');
  };

  const githubBtn = () => {
    window.open(github, '_blank');
  };

  // Conditionally render link button if it is a deployed app
  const isDeployedApp = () => {
    if (link) {
      return (
        <button
          className='btn btn-lg btn-outline-danger modalBtn'
          type='button'
          onClick={projectBtn}
        >
          Go To Project
        </button>
      );
    } else {
      return <p className='noAppText'>Local Application Only</p>;
    }
  };

  return (
        
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <XSquare className='modal-x' onClick={onClose} />
        <h3 className='modalTitle'>{name}</h3>
        <Carousel variant='dark'>
          {file.map((image, i) => (
            <Carousel.Item key={`${image} ${i}`} interval={5000}>
              <img
                src={require(`../../assets/images/projects/${image}.png`)}
                alt={`${image} ${i}`}
                className='modalImg'
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className='modalText'>
          <p>{description}</p>
          {isDeployedApp()}
          <button
            className='btn btn-lg btn-outline-danger modalBtn'
            type='button'
            onClick={githubBtn}
          >
            Go To GitHub Repo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
