function insertDash(num) {
  return String(num).replace(/([13579])(?=[13579])/g, '$1-');
}