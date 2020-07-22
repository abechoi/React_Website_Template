import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-name">SECTIONS</h2>
          <a className="footer-link" href="/">Projects</a>
          <a className="footer-link" href="/blogs">Blogs</a>
          <a className="footer-link" href="/docs">Docs</a>
          <a className="footer-link" href="about">About</a>
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