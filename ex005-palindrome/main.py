def isPalindrome(str):
  strPos = len(str) - 1
  for i in range(len(str)):
    if str[i] != str[strPos]:
      return False
    strPos -= 1
  return True