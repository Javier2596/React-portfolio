import React from 'react';
//import '../styles/index.css';

const styles = {
  content: {
    margin: 100,
    marginTop: 50,
    fontFamily: 'Lucida Sans',
    fontSize: 25,
    color: 'beige',
  },
  image: {
    margin: 0,
    color: 'beige',
    borderSpacing: '5px',
    borderWidth: '1px',
    paddingBottom: '0px',
    textAlign: 'center',
    fontSize: '2rem',

  }
};

export default function Portfolio() {
  return (
  <div style={styles.content}>
  <h1>My Portfolio</h1>
  
    <div style={styles.image}>
      <a href="https://mayamckinney.github.io/tumblr-marvel/">
        <div>
          <img src="./images/PokeProj.png" alt='Pokemon Search'></img>
        </div>
      </a>  
    </div>

    <div style={styles.image}>
      <a href="https://intentional-health.herokuapp.com/">
        <div>
          <img src="./images/IntentionalHealth.png" alt='Intentional Health'></img>    
        </div>
      </a>  
    </div>
</div>
)};