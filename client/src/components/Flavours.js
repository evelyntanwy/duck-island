import React from "react";

function Flavours({ flavours, index, handleDeleteFlavours }) {
  return (
    <div className="flavours">
      <span className="flavours-text">
        {index + 1}.{flavours.text}
      </span>
      <span
        onClick={() => handleDeleteFlavours(flavours.id)}
        className="flavours-delete"
      >
        X
      </span>
      <p>Flavours</p>
    </div>
  );
}

export default Flavours;
