import React from "react";
import { connect } from "react-redux";
import { Popup } from "semantic-ui-react";
import "./Footer.css";
import { footerText } from "../../common/footerText";

const Footer = () => {
  let lang = localStorage.getItem("language");
  return (
    <div className="footer center">
      <span className="social email">
        <Popup
          content="info@codigoecuador.com"
          trigger={
            <a href="mailto:info@codigoecuador.com">
              <i class="big envelope outline icon"></i>
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
              <i class="big twitter icon"></i>
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
              <i class="big phone icon"></i>
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
              <i class="big linkedin icon"></i>
            </a>
          }
          position="bottom center"
        />
      </span>

      <div className="subscribe">
        <a href="https://codigoecuador.us4.list-manage.com/subscribe?u=1acc27a779c93fd930d6c3e44&id=bb2f534a55">
          {footerText[lang].subscribe}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { size: state.size, language: state.language };
};

export default connect(mapStateToProps)(Footer);
