import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

import './Footer.css';



function Footer() {
  return (
    <div className='footer-container'>

        <small className='website-rights'>Aaron Feingold © 2020</small>

        <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/aaron-feingold-1a76ba1b4/' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>

    </div>
  );
}

export default Footer;