import React from "react";
import "./Footer.css";
import { social } from "../donate/contact/social";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer">
      <Grid.Row columns={3}>
        <Grid.Column verticalAlign="center">
          <div className="email">
            <a href="mailto:info@codigoecuador.com">
              <i class="envelope outline icon"></i>info@codigoecuador.com
            </a>
          </div>
        </Grid.Column>

        <Grid.Column verticalAlign="center">
          <div className="twitter">
            <a href="https://twitter.com/CodigoEC">
              <i class="twitter icon"></i>@CodigoEC
            </a>
          </div>
        </Grid.Column>

        <Grid.Column verticalAlign="center">
          <div className="phone">
            <a href="tel:+15712165441">
              <i class="phone icon"></i>
              +1 571-216-5441
            </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
};
export default Footer;
