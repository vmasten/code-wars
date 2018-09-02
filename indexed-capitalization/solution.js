function capitalize(s,arr){
  let result = '';
  let idx;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        idx = arr[j];
        result += s[i].toUpperCase();
      }
    }
    if (i !== idx) {
      result += s[i];
    }
  }
return result;
}