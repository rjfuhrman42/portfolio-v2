import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

import stars from '../../images/stars.png';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        {/* <Title title="Contact" /> */}
        <Fade bottom duration={1000} delay={100} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            <div className="stars-container">
              <img src={stars} alt="a bunch of purple stars" className="purple-stars" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me"
              href={`mailto:${email}`}
            >
              {/* {btn || 'Contact Me'} */}
              <h2>Contact Me</h2>
            </a>
            <div className="stars-container">
              <img src={stars} alt="a bunch of purple stars" className="purple-stars flipped" />
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
