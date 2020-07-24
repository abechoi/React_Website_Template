import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-section">
          <h2 className="footer-name" style={{ color: '#00FECA' }}>SECTION</h2>
          <ul className="footer-links">
            <li className="footer-link"><Link to="/">Projects</Link></li>
            <li className="footer-link"><Link to="/blogs">Blogs</Link></li>
            <li className="footer-link"><Link to="/docs">Docs</Link></li>
            <li className="footer-link"><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-name" style={{ color: '#7B61F8' }}>SOCIAL</h2>
          <ul className="footer-links">
            <li className="footer-link"><a href="https://github.com/abechoi" rel="noopener noreferrer" target="_blank">Github</a></li>
            <li className="footer-link"><a href="https://codepen.io/collection/DjaJdx" rel="noopener noreferrer" target="_blank">Codepen</a></li>
            <li className="footer-link"><a href="https://linkedin.com/in/abrahamjchoi" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

      </div>
      <p>Developed by:</p>
      <a className="footer-logo" href="/">
        <div className="logo-first">ABE</div>
        <div className="logo-last">CHOI</div>
      </a>
    </footer>
  );
}
export default Footer;