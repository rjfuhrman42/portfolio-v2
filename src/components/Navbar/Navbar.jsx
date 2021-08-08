import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

function Navbar() {
  let previousScroll = 0;
  const [isShown, setIsShown] = useState(false);
  const { navbar } = useContext(PortfolioContext);
  const { navlinks } = navbar;

  useEffect(() => {
    // document is not available during server-side rendering, so put in a useEffect()

    function fixNav() {
      setIsShown(previousScroll > window.scrollY);
      previousScroll = window.scrollY;
    }

    window.addEventListener('scroll', fixNav);

    return () => {
      document.removeEventListener('scroll', fixNav);
    };
  }, []);

  return (
    <nav className={`nav-bar ${isShown ? 'fixed-nav' : 'hidden'}`}>
      <ul className="nav-links">
        {navlinks && // if(navlinks is true) { *** display the array *** }
          navlinks.map(({ link, name, id }) => (
            <li key={id}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
