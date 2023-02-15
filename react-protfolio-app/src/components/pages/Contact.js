import React from 'react';

const styles = {
  textBox: {
    width: 400,
    height: 300,
    borderRadius: 5,
  },
  content: {
    margin: 100,
    marginTop: 50,
    fontFamily: 'Lucida Sans',
    fontSize: 20,
    color: 'beige',
  },
  box: {
    borderRadius: 5,
  }
};


export default function Contact() {
  return (
    <div style={styles.content}>
      <h1>Contact</h1>
      <h2>Name:</h2>

      <input style={styles.box} type='text'></input>

      <h2>Email address:</h2>

      <input style={styles.box} type='text'></input>

      <h2>Message</h2>

      <textarea style={styles.textBox}type='text'></textarea>

      <button type='button'>Submit</button>
    </div>
  );
}