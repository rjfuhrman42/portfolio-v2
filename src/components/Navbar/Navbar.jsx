import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

function Navbar() {
  const { navbar } = useContext(PortfolioContext);
  const { navlinks } = navbar;

  const nav = document.querySelector('.nav-bar');

  const topOfNav = nav && nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        {navlinks && // if(navlinks is true) { *** display the array *** }
          navlinks.map(({ link, name }) => (
            <li>
              <Link to={link}>{name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
