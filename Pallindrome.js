const isPalindrome = function (x) {
  const str = `${x}`;
  const arr = str.split("");
  return arr.reverse().join("") === str;
};
