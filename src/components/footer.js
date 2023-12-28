import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../styles/index.css';

function Footer() {
  return (
      <footer className="foot text-center">
        <h1 className="">
          
            <a href="https://github.com/Javier2596">
              <DiGithubBadge className="badges"/>
            </a>

            <a href="https://www.linkedin.com/in/javier-martinez-516933257/">
              <FaLinkedin className="badges"/>
            </a>

            <a href="https://www.instagram.com/java_duh_hutt/">
              <FaInstagram className="badges"/>
            </a>

            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100041542161659">
              <FaFacebookSquare className="badges"/>
            </a>

        </h1>
      </footer>
  );
}

export default Footer;