import React from 'react'; 

export default function Portfolio() {
  return (
  <div>
  <h1>My Portfolio</h1>
  
    <div className="m-3 p-3">
      <a href="https://mayamckinney.github.io/tumblr-marvel/">
        <div>
          <img src="../images/PokeProj.png" alt="Pokemon Search"></img>
        </div>
      </a>  
    </div>

    <div className="m-3 p-3">
      <a href="https://intentional-health.herokuapp.com/">
        <div>
          <img src="../images/IntentionalHealth.png" alt="Intentional Health"></img>    
        </div>
      </a>  
    </div>
</div>
)};