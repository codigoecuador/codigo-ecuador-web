import React from "react";
import { connect } from "react-redux";
import MinorPartners from "./MinorPartners";
import Partners from "./Partners";

const PartnersContainer = () => {
  return (
    <div className="main-container">
      <Partners />
      <div className="minor-partners">
        <MinorPartners />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(PartnersContainer);
