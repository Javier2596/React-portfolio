import React from 'react';
import '../../styles/index.css';

export default function Resume() { 
  return (
    <div className="p-4">
      <h1 className="title">My Resume</h1>

      <p className="p-2">For a more detailed description click the link <a href="https://docs.google.com/document/d/1fhyIqN1h8eqshcZqOZbVRrJ8c52oC8Z5ZHf1n2b6DyQ/edit?usp=sharing"> here</a>.</p>
      <h2 className="secti px-2">Proficiencies in:</h2>
      <ul className="p-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>React</li>
        <li>SQL & sequelize</li>
        <li>Webpack</li>
        <li>Object Oriented Programming (OOP)</li>
        <li>Gitbash</li>
        <li>VScode</li>
        <li>RESTful APIs</li>
      </ul>
    </div>
  );
}
