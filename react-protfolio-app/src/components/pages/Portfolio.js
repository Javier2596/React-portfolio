import React from 'react'; 
import img2 from '../../images/PokeProj.png';
import img3 from '../../images/IntentionalHealth.png';

export default function Portfolio() {
  return (
  <div>
  <h1>My Portfolio</h1>
  
    <div className="m-3 p-3">
      <a href="https://mayamckinney.github.io/tumblr-marvel/">
        <div>
          <img src={img2} alt="Pokemon Search"></img>
        </div>
      </a>  
    </div>

    <div className="m-3 p-3">
      <a href="https://intentional-health.herokuapp.com/">
        <div>
          <img src={img3} alt="Intentional Health"></img>    
        </div>
      </a>  
    </div>
</div>
)};
