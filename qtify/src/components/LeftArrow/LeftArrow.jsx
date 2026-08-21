import React from "react";

function LeftArrow({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Previous">
      ←
    </button>
  );
}

export default LeftArrow;