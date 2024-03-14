def celsiusToFahrenheit (number):
  result = 1.8 * number + 32
  return "% .1f" %result

print(celsiusToFahrenheit(42))