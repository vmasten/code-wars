function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/.test(username);
//  /escape special character  ^start $end / escape special character  
  return res;
}