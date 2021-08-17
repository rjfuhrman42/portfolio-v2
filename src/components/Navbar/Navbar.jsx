import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

function Navbar() {
  // let previousScroll = 0;
  // const [isShown, setIsShown] = useState(true);
  const { navbar } = useContext(PortfolioContext);
  const { navlinks } = navbar;

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  // useEffect(() => {
  //   // document is not available during server-side rendering, so put in a useEffect()

  //   function fixNav() {
  //     setIsShown(previousScroll > window.scrollY);
  //     previousScroll = window.scrollY;
  //   }

  //   window.addEventListener('scroll', fixNav);

  //   return () => {
  //     document.removeEventListener('scroll', fixNav);
  //   };
  // }, []);

  return (
    <nav id="nav-bar">
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
