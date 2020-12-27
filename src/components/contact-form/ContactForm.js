import React from "react";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <main className="contact">
      <article className="section row">
        <div className="contact__form">
          <h2>Convinced To Work With Us?</h2>
          <p>
            Company has helped agencies keep their promises to clients since
            2005.
          </p>

          <form>
            <div className="input-wrapper">
              <CustomInput
                type="text"
                placeholder="Fullname"
                className="input"
              />
              <CustomInput
                type="text"
                placeholder="Email Address"
                className="input"
              />

              <CustomInput
                type="text"
                placeholder="Phone Number"
                className="input"
              />
            </div>
            <textarea placeholder="Message in Brief" />
          </form>

          <CustomButton text="Submit" />
        </div>
      </article>
    </main>
  );
}
