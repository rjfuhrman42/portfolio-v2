import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

function Navbar() {
  const { navbar } = useContext(PortfolioContext);
  const { navlinks } = navbar;

  useEffect(() => {
    const nav = document.querySelector('.nav-bar'); // document is not available during server-side rendering, so put in a useEffect()

    const topOfNav = nav && nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
      }
    }

    window.addEventListener('scroll', fixNav);

    return () => {
      document.removeEventListener('scroll', fixNav);
    };
  }, []);

  return (
    <nav className="nav-bar">
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
