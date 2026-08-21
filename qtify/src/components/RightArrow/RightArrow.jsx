import React from "react";

function RightArrow({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Next">
      →
    </button>
  );
}

export default RightArrow;