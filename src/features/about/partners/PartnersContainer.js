import React from "react";
import MinorPartners from "./MinorPartners";
import Partners from "./Partners";

const PartnersContainer = () => {
  return (
    <div className='main-container'>
      <Partners />
      <MinorPartners className="minor-partners"/>
    </div>
  );
};

export default PartnersContainer;
