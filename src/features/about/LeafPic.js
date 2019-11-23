import React from "react";
import ecuadorLeaf from "./ecuadorLeaf.jpg";

const LeafPic = () => {
  return (
    <div>
      <img
        src={ecuadorLeaf}
        alt='large leaf by Jose Danilo on Unsplash.com'
        className='leafPic'
      />
    </div>
  );
};

export default LeafPic;
