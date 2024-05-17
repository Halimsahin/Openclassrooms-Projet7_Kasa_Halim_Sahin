import React from "react";


function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className="banner__clair"></div>
    </div>
  );
}

export default Banniere;