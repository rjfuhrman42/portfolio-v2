import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <div className="about-me-flex-container">
          <div className="about-wrapper">
            <div className="about-wrapper__image">
              <AboutImg alt="profile picture" filename={img} />
            </div>
            <div className="about-wrapper__info">
              <Title title="About Me" />
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="about-wrapper__info-text">
                {paragraphTwo ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="about-wrapper__info-text">
                {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
              </p>
            </div>
          </div>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
          <div className="palette-rect dark" />
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance="30px">
          <div className="palette-rect medium" />
        </Fade>{' '}
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <div className="palette-rect light" />
        </Fade>
      </Container>
    </section>
  );
};

export default About;
