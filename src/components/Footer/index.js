import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          Blossom<span className="logo-italic">RX</span>
        </div>
        <div className="divide" />
        <p>
          © <span class="currentYear">2021</span> BlossomRX. All rights
          reserved.
        </p>
        <nav class="menu-sub-footer">
          <ul>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
