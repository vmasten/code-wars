function high(x){
  let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let test = x.split(' ');
  let currentScore = 0;
  let highScore = 0;
  let highest = "";
  for (let i = 0; i < test.length; i ++) {
    for (let j = 0; j < test[i].length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        if (test[i][j] === alphabet[k]) {
        currentScore += k;
        }
      }
    }
    if (currentScore > highScore) {
    highScore = currentScore;
    highest = test[i];
    currentScore = 0;
    } else {
    currentScore = 0;
    }
  }
  return highest;
}