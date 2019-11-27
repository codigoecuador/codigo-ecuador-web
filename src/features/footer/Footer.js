import React from "react";
import "./Footer.css";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer center">
      <div className="email">
        <a href="mailto:info@codigoecuador.com">
          <i class="envelope outline icon"></i>info@codigoecuador.com
        </a>
      </div>

      <div className="twitter">
        <a href="https://twitter.com/CodigoEC">
          <i class="twitter icon"></i>@CodigoEC
        </a>
      </div>

      <div className="phone">
        <a href="tel:+15712165441">
          <i class="phone icon"></i>
          +1 571-216-5441
        </a>
      </div>
    </div>
  );
};
export default Footer;

// //   <div className="medium">
// <a href="https://medium.com/código-ecuador">
// <i class="small medium icon" />
// </a>
// </div>
