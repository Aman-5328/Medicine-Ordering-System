/**
     * 
     * @name Footer Page
     *
     * @description
     * This is the Footer page of the application.
     *
     * @author Aman Sharma(amasharma@qasource.com)
     */

import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer>
        <footer id="footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="terms-privacy">
                    <li><Link to="/">Terms of Use</Link> </li>
                    <li><Link to="/">Privacy Policy </Link></li>
                    <li><Link to="/">Disclaimer</Link></li>
                  </ul>
                </div>
                
                <div className="col-sm-12">
                  <p>Copyright ©️ 2017 All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </footer>
    );
  }

export default Footer;