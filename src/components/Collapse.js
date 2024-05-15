import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__width__container">
      <div className="collapse__width__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className="collapse__width__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
