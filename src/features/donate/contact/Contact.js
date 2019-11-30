import React from "react";
import "./Contact.css";
import { connect } from "react-redux";
import { contactText } from "../../../common/donateText/contactText.js";

const Contact = props => {
  let lang = localStorage.getItem("language");
  return (
    <>
      <div className="contact-us center">{contactText[lang].contact}</div>
      <br />
      <a href="https://charity.gofundme.com/o/en/campaign/promote-women-in-tech-careers-in-ecuador/codigoecuador">
        <h1>{contactText[lang].gofundme}</h1>
      </a>
      <br />
      <br />

      <a
        className="donate-button"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD"
      >
        {contactText[lang].donateButtonText}
      </a>
      <br />
      <br />
      <div className="non-profit center">{contactText[lang].copyrightText}</div>
    </>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Contact);
