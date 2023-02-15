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


export default function About() {
  return (
    <div style={styles.content}>
      <h1>About Me</h1>
      <img src= "../images/avataaars.png" alt='profile image'></img>
      <p>
        Hello, my name is Javier Martinez. I was born in Tucson, AZ and have lived here my whole life. I originally went to school for Criminal Justice Studies; but have since made a career change to study Web Development and pursue a career in the Web Dev industry. So far I have learned many differnt languages, databases, and libraries to increase my knowledge and better my career as a fullstack web developer. My goals are to continue learning and practicing everything I have learned in class so that I am comfortable applying to jobs in the industry; and to someday pass my knowledge and experiences to other web developers who are starting like me.   
      </p>
    </div>
  );
}