import React from "react";
import { Popup } from "semantic-ui-react";
import womenCodigo from "./womenCodigo.jpg";
import { homeText } from "../../common/homeText/homeText";

const CoverPic = () => {
  return (
    <div>
      <img
        src={womenCodigo}
        alt="young women in a field, smiling as they face the camera. Photo by @OmarLopez1 on Unsplash.com"
        className="cover-pic"
      />
    </div>
  );
};

export default CoverPic;
