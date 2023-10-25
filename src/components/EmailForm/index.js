import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contact_number = (Math.random() * 100000) | 0;
    // add the following code to set the value of the hidden input field
    const contactNumberInput = document.createElement("input");
    contactNumberInput.type = "hidden";
    contactNumberInput.name = "contact_number";
    contactNumberInput.value = contact_number;
    form.current.appendChild(contactNumberInput);
    // send the form with the updated form.current
    emailjs
      .sendForm(
        "service_gzh74ax",
        "contact_form",
        form.current,
        "TeuFVn76bYxVYLyyd"
      )
      .then(
        (result) => {
          console.log(result.text);
          let inputs = document.querySelectorAll("input");
          inputs.forEach((input) => (input.value = ""));
          let btn = document.querySelector(".inputBoxBtn");
          btn.style.background = "green";
          btn.style.color = "var(--white)"
          btn.style.pointerEvents = "none";
          btn.innerHTML = "Sent";

          setTimeout(() => {
            btn.style.background = "var(--white)";
            btn.style.color = "var(--black)";
            btn.style.pointerEvents = "auto";
            btn.innerHTML = "Submit";
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="inputBox-container">
        <div className="inputBox">
          <input
            type="name"
            name="user_name"
            required="required"
            placeholder="* Name"
          />
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="inputBox">
          <input
            type="email"
            name="user_email"
            required="required"
            placeholder="* Email Address"
          />
        </div>
        <div className="spacer"></div>
        <div className="inputBox inputBox-message">
          <input
            type="text"
            name="message"
            required="required"
            className="inputBox-message-input"
            placeholder="* Message"
          />
        </div>
        <div className="spacer"></div>
      </div>
      <div className="inputBoxBtn-Container">
        <button
          type="submit"
          className="inputBoxBtn"
          value="send"
          id="submitBtn"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default EmailForm;
