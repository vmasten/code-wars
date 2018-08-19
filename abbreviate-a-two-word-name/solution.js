function abbrevName(name){
  let splitName = name.split(' ');
  let firstInitial = splitName[0][0].toUpperCase();
  let lastInitial = splitName[1][0].toUpperCase();
  
  return `${firstInitial}.${lastInitial}`;

}