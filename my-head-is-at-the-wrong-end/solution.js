'use strict';

function fixTheMeerkat(arr) {
  let x = arr[0];
  let y = arr[2];
  arr.shift();
  arr.pop();
  console.log(arr);
  arr.unshift(y);
  arr.push(x);
  return arr;
 }