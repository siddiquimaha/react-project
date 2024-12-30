import React from 'react';

export default function Contactform() {
  return (
    <div className="contact-form">
      <div className="form">
        <h1 className="form-title">Contact Us</h1>
        <form action="#">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" />
          </div>
          <button className="form-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
