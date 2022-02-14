import React from 'react';
import { XSquare } from 'react-bootstrap-icons';

function Modal({ onClose, currentProject }) {
  const { name, file, description, github, link } = currentProject;

  const projectBtn = () => {
    window.open(link, '_blank');
  };

  const githubBtn = () => {
    window.open(github, '_blank');
  };

  return (
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <XSquare className='modal-x' onClick={onClose} />
        <img
          src={require(`../../assets/images/${file}.png`)}
          alt={file}
          className='modalImg'
        />
        <div className='modalText'>
          <p>{description}</p>
          <button
            className='btn btn-lg btn-outline-danger modalBtn'
            type='button'
            onClick={projectBtn}
          >
            Go To Project
          </button>
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
