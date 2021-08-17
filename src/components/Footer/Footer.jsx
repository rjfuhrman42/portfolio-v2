import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url, icon } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  {name}
                  <i className={`fa fa-${icon || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
              <div>back to top</div>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
