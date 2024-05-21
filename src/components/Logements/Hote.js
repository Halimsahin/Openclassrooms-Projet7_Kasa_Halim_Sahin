import React from 'react';

function Hote(props) {
    return (
      <>
        <span className="nom-hote">{props.name}</span>
        <img
          className="photo-hote"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Hote;