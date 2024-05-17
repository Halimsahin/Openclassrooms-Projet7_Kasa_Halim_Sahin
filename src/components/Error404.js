import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error">
        <p className="error__number">404</p>
        <p className="error__txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="error__link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    );
};

export default Error404;