var gimme = function (inputArray) {
 let originArray = [];
 originArray.push(inputArray[0], inputArray[1], inputArray[2]);
 let newArray = inputArray.sort(function(a, b) {
   return a - b;
 });
 for (let i = 0; i < originArray.length; i++) {
   if (newArray[1] === originArray[i]) {
     return inputArray.indexOf(inputArray[i]);
   }
 }
};