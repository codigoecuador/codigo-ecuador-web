import React from "react";
import { Popup } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer center">
      <h3>Contact us</h3>
      <span className="social email">
        <Popup
          content="info@codigoecuador.com"
          trigger={
            <a href="mailto:info@codigoecuador.com">
              <i class="envelope outline icon"></i>email{""}
            </a>
          }
          position="bottom center"
        />
      </span>

      <span className="social twitter">
        <Popup
          content="follow us on Twitter"
          trigger={
            <a href="https://twitter.com/CodigoEC">
              <i class="twitter icon"></i>Twitter
            </a>
          }
          position="bottom center"
        />
      </span>

      <span className="social phone">
        <Popup
          content="+1 571.216.5441"
          trigger={
            <a href="tel:+15712165441">
              <i class="phone icon"></i>
              phone
            </a>
          }
          position="bottom center"
        />
      </span>

      <span className="social linked-in">
        <Popup
          content="follow us on LinkedIn"
          trigger={
            <a href="https://www.linkedin.com/company/codigo-ecuador">
              <i class="linkedin icon"></i>
            </a>
          }
          position="bottom center"
        />
      </span>
    </div>
  );
};
export default Footer;
