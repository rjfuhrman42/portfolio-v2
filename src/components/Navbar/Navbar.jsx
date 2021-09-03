import React, { useContext, useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

function Navbar() {
  // let previousScroll = 0;
  // const [isShown, setIsShown] = useState(true);
  const { navbar } = useContext(PortfolioContext);
  const { navlinks } = navbar;
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHeroSection, setIsPastHeroSection] = useState(false);

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  function handleClick() {
    if (!isOpen) document.querySelector('body').style.overflow = 'hidden';
    else document.querySelector('body').style.overflow = 'auto';

    setIsOpen((prev) => !prev);
  }

  function handleScroll() {
    const hero = document.querySelector('#hero');
    const nav = document.querySelector('#nav-bar');
    const bottomOfHero = hero.getBoundingClientRect().bottom;
    const bottomOfNav = nav.getBoundingClientRect().bottom;
    if (bottomOfNav >= bottomOfHero && isPastHeroSection === false) setIsPastHeroSection(true);
    else setIsPastHeroSection(false);
  }

  useEffect(() => {
    document.addEventListener('scroll', () => handleScroll());
  }, []);

  return (
    <nav id="nav-bar" className={`nav-bar ${isPastHeroSection ? 'color-change' : ''}`}>
      <Hamburger
        toggled={isOpen}
        toggle={() => handleClick()}
        size={36}
        color={isOpen ? '#bc6ff1' : '#FFF'}
      />
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navlinks && // if(navlinks is true) { *** display the array *** }
            navlinks.map(({ link, name, id }) => (
              <li key={id}>
                <Link onClick={() => handleClick()} to={link}>
                  {name}
                </Link>
              </li>
            ))}
          <li id="resume-item">{ResumeLink}</li>
        </ul>
      </div>
      <ul className="nav-links">
        {navlinks && // if(navlinks is true) { *** display the array *** }
          navlinks.map(({ link, name, id }) => (
            <li key={id}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        <li className="resume-button-container">{ResumeLink}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
