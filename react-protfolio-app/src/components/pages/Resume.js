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
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        
      </p>
    </div>
  );
}
