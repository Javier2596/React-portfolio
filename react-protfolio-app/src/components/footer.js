import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../styles/index.css';

function Footer() {
  return (
      <footer className="foot text-center">
        <h1>
          
          <DiGithubBadge className="badges"/>
          <FaLinkedin className="badges"/>
          <FaInstagram className="badges"/>
          <FaFacebookSquare className="badges"/>

        </h1>
      </footer>
  );
}

export default Footer;