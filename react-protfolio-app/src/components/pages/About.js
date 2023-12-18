import React from 'react';
import img1 from '../../images/profilePic.png';
import '../../styles/index.css';

export default function About() {
  return (
    <div className="p-4">
      <h1 className="title">About Me</h1>
      <img src={img1} alt="placeholder" className="profileimg py-2"></img>
      <p className="py-3">
        My name is Javier. I originally went to school for Criminal Justice Studies; but have since made a career change to study Web Development and pursue a career as a Full stack web developer. So far I have been learning multiple differnt languages, databases, and libraries to increase my knowledge and better my knowledge and increase my confidence. My goals are to continue learning and practicing everything I have learned in class and on my own so that I can apply to jobs in the industry and start my career. I would also like to someday pass my knowledge and experiences to other web developers who are starting out like I did. 
      </p>
    </div>
  );
}