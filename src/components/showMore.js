import React from "react";

const ShowMore = ({ className, text, handleClick, ariaExpanded }) => (
  <div className="showmore__container">
    <button
      className={className}
      onClick={handleClick}
      aria-expanded={ariaExpanded}
    >
      {text}
    </button>
  </div>
);

export default ShowMore;
