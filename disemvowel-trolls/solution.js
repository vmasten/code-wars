function disemvowel(str) {
  let regex = /[aeiouAEIOU]/g;
  return str.replace(regex, '');
}