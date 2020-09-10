// Determine how many tiles to show before the "Show more" button.
export const getTileNumber = (width) => {
  if (width < 756) {
    return [5, "sm"];
  } else if (width < 1088) {
    return [6, "md"];
  } else return [9, "lg"];
};

// Calculate the animation delay. This supports columns animating one by one in rows.
export const getSalDelay = (index, screen) => {
  switch (screen) {
    case "sm":
      return "400";
    case "md":
      return index % 2 === 0 ? "400" : "500";
    case "lg":
      return index % 3 === 0 ? "400" : index % 3 === 1 ? "500" : "600";
    default:
      return "400";
  }
};
