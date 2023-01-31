module.exports = function check(str, bracketsConfig) {
    let obj = {}; // {) : (}
    bracketsConfig.forEach((pair) => {
      obj[pair[1]] = pair[0];
    })
    let openArr = Object.values(obj);
    let closeArr = Object.keys(obj);
    let glass = [];
    for (let i = 0; i < str.length; i++) {
      if (openArr.indexOf(str[i]) >= 0 && str[i] != obj[str[i]]) {
        glass.push(str[i]);
      } else if (closeArr.indexOf(str[i]) >= 0 && str[i] != obj[str[i]]) {
        if (glass[glass.length - 1] == obj[str[i]]) {
          glass.pop();
        } else return false;
      } else if (str[i] == obj[str[i]]) {
        if (glass.indexOf(str[i]) < 0) {
          glass.push(str[i]);
        } else if (glass[glass.length - 1] == str[i]) {
          glass.pop();
        } else return false;
      }
    }
    if (glass.length == 0) {
      return true;
    } else return false;
  }