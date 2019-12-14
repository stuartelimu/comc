import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state)
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
              name="email"
              className="input-field"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="10"
                placeholder="comment"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button className="contact-btn" onClick={this.handleSubmit}>Send</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
