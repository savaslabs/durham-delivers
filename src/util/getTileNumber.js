export const getTileNumber = (width) => {
  if (width < 756) {
    return 5;
  } else if (width < 1088) {
    return 6;
  } else return 9;
};
