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
      <div className="social-text">
        <b>Email:</b> info@codigoecuador.com
        <a href="mailto:info@codigoecuador.com">
          <i class="envelope outline icon"></i>
        </a>
        <br />
        <br />
        <b>Twitter:</b> @CodigoEC
        <a href="https://twitter.com/CodigoEC">
          <i class="twitter icon"></i>
        </a>
      </div>

      <a
        className="donate-button"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD"
      >
        {contactText[lang].donateButtonText}
      </a>
      <br />
      <br />
      <div className="center">{contactText[lang].copyrightText}</div>
    </>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Contact);
