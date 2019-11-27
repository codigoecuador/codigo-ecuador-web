import React from "react";
import { Popup, Divider } from "semantic-ui-react";
import "./Footer.css";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer center">
      <Divider />
      <h3>Contact us</h3>
      <span className="social email">
        <a href="mailto:info@codigoecuador.com">
          <i class="envelope outline icon"></i>email{""}
        </a>
      </span>

      <span className="social twitter">
        <a href="https://twitter.com/CodigoEC">
          <i class="twitter icon"></i>Twitter
        </a>
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
          content="Linked In"
          trigger={
            <a href="https://www.linkedin.com/company/codigo-ecuador">
              <i class="linkedin icon"></i>
              Linked In
            </a>
          }
          position="bottom center"
        />
      </span>
    </div>
  );
};
export default Footer;
