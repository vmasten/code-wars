function cubeOdd(arr) {
  if (arr.filter(isNaN).length > 0) {return undefined};
  return arr.reduce((total, num) => (num % 2) ? Math.pow(num, 3) + total : total, 0);
}