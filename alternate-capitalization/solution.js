function capitalize(s){
  let resultOdd = '', resultEven = '';
  let returnArray = [];
  for (i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      resultOdd += s[i].toUpperCase();
      resultEven += s[i];
    } else {
      resultOdd += s[i];
      resultEven += s[i].toUpperCase();
    }
  }
  returnArray[0] = resultOdd;
  returnArray[1] = resultEven;
    
  return returnArray;
};