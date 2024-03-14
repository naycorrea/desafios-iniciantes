factorial = (number) => {
  let sum = 1;

  if (!Number.isInteger(number)) {
    return "The parameter is not an Integer";
  }

  while (number > 0) {
    sum = sum * number;
    number--;
  }

  return sum;
};
