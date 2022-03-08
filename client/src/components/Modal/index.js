import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function ProjectModal({ show, handleClose, currentProject }) {
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
    <Modal
      show={show}
      onHide={handleClose}
      size='lg'
      animation={true}
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Carousel variant='dark'>
        {file.map((image, i) => (
          <Carousel.Item key={`${image} ${i}`} interval={5000}>
            <div className='modalImg-div'>
              <img
                src={require(`../../assets/images/projects/${image}.png`)}
                alt={`${image} ${i}`}
                className='modalImg fluid'
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal.Body className='modalText'>
        <p>{description}</p>
        <div className='modalBtn-div'>
          {isDeployedApp()}
          <button
            className='btn btn-lg btn-outline-danger modalBtn'
            type='button'
            onClick={githubBtn}
          >
            Go To GitHub Repo
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
