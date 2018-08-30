function mutateMyStrings(stringOne, stringTwo) {
  let splitOne = stringOne.split('');
  let splitTwo = stringTwo.split('');
  let mutate = stringOne + '\n';
  for (let i = 0; i < splitOne.length; i++) {
    if (splitOne[i] != splitTwo[i]) {
      splitOne[i] = splitTwo[i];
      mutate = mutate.concat(`${splitOne.join('')}\n`);
    }
  }
  return mutate;
}