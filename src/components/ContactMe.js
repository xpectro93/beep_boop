// import "../CSS/AboutMe.css"
import React from "react";
const buttonCss = {
    color:"var(--text-color)",
    margin:"1rem",
    border:"2px solid var(--off-color)",
    padding:"0.5rem"
}
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mqkylqzw"
        method="POST"
        autoComplete="new-password"
        className={"overflow"}
      >
        <div className="nes-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="nes-input"/>
        </div>
        <div className="nes-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" className="nes-input"/>
        </div>
        <div className="nes-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="nes-input"/>
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="retro" style={buttonCss}>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}