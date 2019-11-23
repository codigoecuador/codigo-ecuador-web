import React from "react";
import codigoLogo from "./codigoLogo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={codigoLogo}
        className='logo'
        alt='codigo-ecuador logo, an icon of a brain with the words Equidad Global Empodaramiento Femenino'
      />
    </div>
  );
};

export default Logo;
