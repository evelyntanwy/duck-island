import React from "react";

function Flavours({ flavour, index, handleDeleteFlavours }) {
  return (
    <div className="flavours">
      <span className="flavours-text">
        {index + 1}.{flavour.text}
      </span>
      <span
        onClick={() => handleDeleteFlavours(flavour._id)}
        className="flavours-delete"
      >
        Close
      </span>
      <p>Flavours</p>
    </div>
  );
}

export default Flavours;
