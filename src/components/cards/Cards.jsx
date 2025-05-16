import React from "react";

function Cards({ name, flag }) {
  return (
    <div className="countryCard">
      <img className="image" src={flag} alt={`Flag of ${name}`} />
      <p>{name}</p>
    </div>
  );
}

export default Cards;
