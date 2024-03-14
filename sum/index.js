function sum_values(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum_values(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

function sum_values(arr) {
  let sum = 0;
  for (const i in arr) {
    sum += arr[i];
  }
  return sum;
}

function sum_values(arr) {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
}

function sum_values(arr) {
  let sum = 0;
  let count = 0;
  while (count < arr.length) {
    sum += arr[count];
    count++;
  }
  return sum;
}

function sum_values(arr) {
  const sum = arr.reduce((acc, value) => acc + value, 0);
  return sum;
}
