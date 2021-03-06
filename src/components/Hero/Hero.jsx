import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import planet from '../../images/layered-steps-haikei.png';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <div className="stars small" />
        <div className="stars medium" />
        <div className="stars big" />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="title-and-image-container">
            <div className="hero-text">
              <h1 className="hero-title">
                {title} <br />
                <span className="text-color-main">{name}</span>
              </h1>
              <p className="hero-subtitle">{subtitle}</p>
            </div>
            <div className="meteor-container">
              <img src={planet} alt="a blue flaming meteor" className="meteor" />
            </div>
          </div>
        </Fade>
        {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade> */}
      </Container>
    </section>
  );
};

export default Header;
