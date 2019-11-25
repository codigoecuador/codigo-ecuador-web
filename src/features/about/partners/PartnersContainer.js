import React from "react";
import MinorPartners from "./MinorPartners";
import Partners from "./Partners";

const PartnersContainer = () => {
  return (
    <div className='allPartners'>
      <Partners />
      <MinorPartners />
    </div>
  );
};

export default PartnersContainer;
