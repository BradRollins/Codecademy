//the variable named kelvin will stay constant
const kelvin = 293;
const celsius = kelvin - 273;
console.log(celsius);
let Fahrenheit = celsius * (9 / 5) + 32;
console.log(Math.floor(Fahrenheit));
Fahrenheit = 68;
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);
