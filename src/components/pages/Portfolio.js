import React from 'react'; 
import img2 from '../../images/PokeProj.png';
import img3 from '../../images/IntentionalHealth.png';
import '../../styles/index.css';

export default function Portfolio() {
  return (
  <div className="p-4">
  <h1 className="title">My Portfolio</h1>
    <div>
      <div className="port my-5">
        <a href="https://mayamckinney.github.io/tumblr-marvel/">
            <img src={img2} alt="Pokemon Search" className="images"></img> 
        </a> 
        <div className="mx-4"> 
          <p>A Front-end web Application that allows the user to search any Pokemon from any generation along with it's description and abilities as well as it's favorite hobby. This application demonstrates the basic front-end web development skills for most projects. My particular portion of this project was helping logic via JavaScript to help render the pokemon picture and decsription to the page. This project challenged me because it was my first real project that I worked on in a team setting. I did need help in the final days of working on the project because I could not get the description of the pokemon to render in the specific spot that I needed it to be. This project helped me understand that your first time coding is not going to be successful and that only time and practice will help me on my coding journey.</p>
        </div> 
      </div>

      <div className="port my-5">
        <a href="https://intentional-health.herokuapp.com/">
          <img src={img3} alt="Intentional Health" className="images"></img>    
        </a>  
        <div className="mx-4">
            <p>A Fullstack application that is a fitness/ goal setter and helps the user keep track of their workout routines and what goals they wish to reach. To keep the application organized; it comes with a home page, work out page, and goal page. Before a user can start using the app, they have to create an account which will allow them to save their goals and workouts when they exit the application and return at a later time. This app uses both Front-end (HTML, CSS framework: Bulma, Handlebar.js) and Back-end (MySQL2, Sequelize, Express.js, Bcrypt) technologies. My portion of the project was creating the api routes which allowed the user to navigate to specific pages, create data (goals and workouts) to the database, delete data, and pull up data that they created before. This project was challenging to me because it was my first project that I made using Back-end technologies I volunteered to work on the API routes because They seemed like the most challenging at the time and I had a difficult time understanding how they worked when I first learned about them. This project taught me that being a Fullstack web developer is not an easy task but that it is very rewarding when you can create something that works and functions like a real website.</p>
        </div>
      </div>
    </div>  
</div>
)};
