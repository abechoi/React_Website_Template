import React from "react";
import SectionLink from "./links/SectionLink";

// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
// npm i -S @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const links = [
  {id: 1, name: 'Github', icon: faGithub, size: '3x', link: 'https://github.com/abechoi'},
  {id: 2, name: 'Codepen', icon: faCodepen, size: '3x', link: 'https://github.com/abechoi'},
  {id: 3, name: 'LinkedIn', icon: faLinkedin, size: '3x', link: 'https://github.com/abechoi'},
];

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a className="nav-logo-link" href="/">
          <div className="logo-first">ABE</div>
          <div className="logo-last">CHOI</div>
        </a>
      </div>
      <ul className="site-links">
        <li><SectionLink name="Projects"/>PROJECTS</li>
        <li><SectionLink name="Docs" />DOCS</li>
        <li><SectionLink name="Blogs" />BLOGS</li>
        <li><SectionLink name="About" />ABOUT</li>
      </ul>
      <ul className="social-links">
        { links.map(link => {
          return (
            <li key={link.id}>
              <a  href={link.link} target="__blank">
                <FontAwesomeIcon  className="icon-links" icon={link.icon} size={link.size}/>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;