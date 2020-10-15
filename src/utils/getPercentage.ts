export default (numerator: number, denominator: number) => {
  if (denominator < 1) {
    return 0;
  }

  return Math.floor((numerator / denominator) * 100);
};
