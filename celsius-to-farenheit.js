const converters = require('./converters.js');
 
const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = converters.celsiusToFahrenheit(celsiusInput);
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);