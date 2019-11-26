import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className='center large'>Contact us if you can help!</div>
      <br />
      <div className="social-text">
        <b>Email:</b> info@codigoecuador.com
        <a href='mailto:info@codigoecuador.com'>
          <i class='envelope outline icon'></i>
        </a>

        <br/>
        <br/>

        <b>Twitter:</b> @CodigoEC
        <a href='https://twitter.com/CodigoEC'>
          <i class='twitter icon'></i>
        </a>
      </div>

      <a
        className='donate-button'
        href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD'
      >
        Donate Now
      </a>
      <br />
      <br />
      <div className='center'>
        Código Ecuador is a 501(C)(3) organization under the International
        Intellectual Exchange Initiative Inc.
      </div>
    </>
  );
};

export default Contact;
