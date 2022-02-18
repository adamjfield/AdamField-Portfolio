import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownSquare } from 'react-bootstrap-icons';

function About({setCurrentCategory, categories}) {
  return (
    <section className='hero'>
      <div>
        <div className='hero-heading'>
          <div>
            <h1>
              Hi, my name is <span className='hero-name'>Adam Field.</span>
            </h1>
          </div>
          <div style={{ marginLeft: 100 }}>
            <h2>I am a web developer</h2>
          </div>
          <div className='small-heading'>
            <p>
              I'm a full stack web developer that enjoys building functional and
              user friendly applications. I am currently seeking new
              opportunities to so feel free to reach out here{' '}
              <span>
                <ArrowDownSquare />
              </span>
            </p>
          </div>
        </div>
        <div>
          <Link to='/contact'>
            <button
              type='button'
              className='btn btn-outline-danger contact-btn'
              onClick={() => {
                setCurrentCategory(categories[3].name);
              }}
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={require('../../assets/images/bitmoji-big.png')}
          alt='bitmoji icon'
          className='bitmoji'
        />
      </div>
      {/* <div className='about-bio'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
          tincidunt praesent semper feugiat. Eu nisl nunc mi ipsum. Ut pharetra
          sit amet aliquam id. Sed ullamcorper morbi tincidunt ornare. Senectus
          et netus et malesuada fames ac turpis. Phasellus faucibus scelerisque
          eleifend donec pretium vulputate sapien nec sagittis. Sed egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet
          mattis vulputate enim nulla aliquet porttitor lacus. Placerat in
          egestas erat imperdiet sed. Massa sapien faucibus et molestie ac
          feugiat. Ultrices dui sapien eget mi. Scelerisque eu ultrices vitae
          auctor eu augue ut lectus. Elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus. Metus vulputate eu scelerisque felis
          imperdiet proin fermentum leo. Eu feugiat pretium nibh ipsum consequat
          nisl vel.
          <br />
          Arcu non sodales neque sodales. Nibh venenatis cras sed felis eget
          velit. Integer enim neque volutpat ac tincidunt. Vulputate ut pharetra
          sit amet aliquam id. Mollis aliquam ut porttitor leo a diam
          sollicitudin tempor id. Faucibus pulvinar elementum integer enim neque
          volutpat ac. Arcu dui vivamus arcu felis. Egestas pretium aenean
          pharetra magna ac. Commodo ullamcorper a lacus vestibulum sed arcu non
          odio euismod. Scelerisque in dictum non consectetur a erat nam. Tempor
          nec feugiat nisl pretium fusce id velit ut tortor. Rhoncus urna neque
          viverra justo. Tincidunt tortor aliquam nulla facilisi cras fermentum
          odio. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Urna
          neque viverra justo nec ultrices. Iaculis urna id volutpat lacus
          laoreet non curabitur. Ut enim blandit volutpat maecenas. Habitant
          morbi tristique senectus et netus et malesuada fames.
        </p>
      </div> */}
    </section>
  );
}

export default About;
