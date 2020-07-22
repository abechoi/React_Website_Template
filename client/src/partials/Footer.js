import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-name">SECTIONS</h2>
          <Link className="footer-link" to="/">Projects</Link>
          <Link className="footer-link" to="/blogs">Blogs</Link>
          <Link className="footer-link" to="/docs">Docs</Link>
          <Link className="footer-link" to="/about">About</Link>
        </div>
      </div>
      <a className="footer-logo" href="/" target="__blank">
        <h4 className="footer-first">ABE</h4>
        <h4 className="footer-last">CHOI</h4>
      </a>
    </footer>
  );
}
export default Footer;