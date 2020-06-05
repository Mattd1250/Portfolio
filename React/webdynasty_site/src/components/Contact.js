import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2 className="headingTitle">Contact Me to Get Started</h2>
      <div className="contactContainer">
        <form id="form" action="#">
          <div className="nameEmail">
            <div className="nameForm">
              <label for="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="emailForm">
              <label for="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="textarea">Comment/Question</label>
            <textarea
              id="textarea"
              placeholder="Type your comment or question."
              required
            ></textarea>
          </div>

          <input
            className="formBtn whiteRedBtn"
            type="submit"
            name="submit"
            id="submit"
          />
        </form>
      </div>
    </div>
  );
}
