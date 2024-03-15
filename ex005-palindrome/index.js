isPalindrome = (str) => {
  let strPos = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[strPos]) return false;
    strPos--;
  }
  return true;
};
