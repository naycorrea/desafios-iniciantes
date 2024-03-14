# add fixed values
def sum_values(a, b, c):
  sum = a + b + c
  print(sum)

# add values from a list
def sum_values(values):
  sum = 0
  for i in values:
    sum += i
  print(sum)

# add values from a list
def sum_values(values):
  count = 0
  sum = 0

  while (count < len(values)):
    sum += values[count]
    count += 1

  print(sum)