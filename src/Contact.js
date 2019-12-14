import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-container bg-grey ">
        <span className="div-title">Contact us</span>
        <div className="contact-form">
          <div>
            <span>Contact us and we will get back to you within 24 hours.</span>
            <span>
              <i className="fas fa-map-marker-alt"></i>
              Kampala Uganda
            </span>
            <span>
              <i className="fas fa-mobile-alt"></i>
              +256 778 800 900
            </span>
            <span>
              <i className="far fa-envelope"></i>
              company.gmail.com
            </span>
          </div>
          <div>
            <span>Contact</span>
            <input
              type="text"
              placeholder="email address"
              className="input-field"
            ></input>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="comment"
              ></textarea>
              <button className="contact-btn">Send</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
