import React from "react";

function Flavours({ flavour, index, handleDeleteFlavours }) {
  return (
    <div className="flavours">
      <span className="flavours-text">{flavour.text}</span>
      <span
        onClick={() => handleDeleteFlavours(flavour._id)}
        className="flavours-delete"
      >
        X
      </span>
      <p>Flavours</p>
    </div>
  );
}

export default Flavours;
