import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-us center">Contact us if you can help!</div>
      <br />

      <div className="social-text">
        <a href="mailto:info@codigoecuador.com">
          <i class="envelope outline icon"></i>info@codigoecuador.com
        </a>
        <br />
        <br />
        <a href="https://twitter.com/CodigoEC">
          <i class="twitter icon"></i>@CodigoEC
        </a>
        <br />
        <br />

        <a href="tel:+15712165441">
          <i class="phone icon"></i>
          +1 571-216-5441
        </a>
        <br />
        <br />
      </div>

      <a
        className="donate-button"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD"
      >
        Donate Now
      </a>
      <br />
      <br />
      <div className="non-profit center">
        Código Ecuador is a 501(C)(3) organization under the International
        Intellectual Exchange Initiative Inc.
      </div>
    </>
  );
};

export default Contact;
