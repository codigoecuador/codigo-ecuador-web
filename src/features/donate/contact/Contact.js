import React from "react";
import "./Contact.css";
import { social } from "./social";

const Contact = () => {
  return (
    <>
      <div className="support-text center">
        <p>Would you like to support our efforts?</p>
        <p>
          Get in touch with Código Ecuador to learn more about our work and how
          you can get involved.
        </p>
      </div>
      <br />
      <br />

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
