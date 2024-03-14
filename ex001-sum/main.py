# add fixed values
def sum_values(a, b, c):
  sum = a + b + c
  return sum

# add values from a list
def sum_values(values):
  sum = 0
  for i in values:
    sum += i
  return sum

# add values from a list
def sum_values(values):
  count = 0
  sum = 0

  while (count < len(values)):
    sum += values[count]
    count += 1

  return sum