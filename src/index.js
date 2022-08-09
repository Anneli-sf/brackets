module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
    return false;
  }

  bracketsConfig = bracketsConfig.map((el) => el.join(""));
 
//   console.log(bracketsConfig);

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (str.includes(bracketsConfig[i])) {
 
      str = str.replace(bracketsConfig[i], "");
      i = -1;
    }
  }

  if (str.length == 0) return true;
  else return false;
}
