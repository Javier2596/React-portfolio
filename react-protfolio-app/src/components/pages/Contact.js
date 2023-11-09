import React from 'react';

export default function Contact() {
  return (
    <div className="p-4">
      <h1 className="title">Contact</h1>
      <div className="p-3">
        <h2>Name:</h2>

        <input></input>

        <h2>Email address:</h2>

        <input ></input>

        <h2>Message</h2>

        <textarea></textarea>

        <button type='button'>Submit</button>
      </div>   
    </div>
  );
}