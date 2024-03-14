def factorial (number):
  sum = 1
  
  if (not type(number) == int):
    return "The parameter is not an Integer"
  
  while (number > 0):
    sum = sum * number
    number -= 1

  return sum