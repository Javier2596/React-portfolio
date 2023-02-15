import React from 'react';

const styles = {
  content: {
    margin: 100,
    marginTop: 50,
    fontFamily: 'Lucida Sans',
    fontSize: 25,
    color: 'beige',
  },
};

export default function Resume() { 
  return (
    <div style={styles.content}>
      <h1>My Resume</h1>
      <div style={styles.image}>
      
    </div>


      <p>Proficiencies in:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>React</li>
        <li>SQL</li>
      </ul>
    </div>
  );
}
