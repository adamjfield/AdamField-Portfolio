import React from 'react';

function Resume() {
  return (
      <div className='resume-div'>
        <div><h2>Resume</h2></div>
      <div>
        <button className='btn btn-lg btn-outline-danger'>
          Dowload Resume
        </button>
      </div>
      <iframe
        src={
          'https://docs.google.com/document/d/e/2PACX-1vQAVskMf_7fQyobR4cZ8dO7UUxrGW3Il7wXo3LjnkUqEyj2nbx04acdtBFO9iR33pCTcaXuDNwhS7S2/pub?embedded=true'
        }
        className='resume'
      ></iframe>
    </div>
  );
}

export default Resume;
