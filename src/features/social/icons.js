import React from "react";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="social-icons-vertical">
      <div className="social email">
        <a href="mailto:info@codigoecuador.com">
          <i className="envelope outline icon big"></i>
        </a>
      </div>

      <div className="social twitter">
        <a href="https://twitter.com/CodigoEC">
          <i className="twitter icon big"></i>
        </a>
      </div>

      <div className="social phone">
        <a href="tel:+15712165441">
          <i className="phone icon big"></i>
        </a>
      </div>

      <div className="social medium">
        <a href="https://medium.com/código-ecuador">
          <i class="medium icon" />
        </a>
      </div>
    </div>
  );
};

export default Icons;
