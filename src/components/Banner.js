import React from "react";


function Banniere({ image, texte, dark }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className= {dark ? "banner__sombre" : "banner__clair"}></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banniere;