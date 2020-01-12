//Random Method Exemple 1.
const min = 1;
const max = 4;
const experiment = Math.floor(Math.random() * (max - min + 1)) + min; 

const randomGenerator = (min, max) => { Math.floor(Math.random() * (max - min) + min) };
console.log(randomGenerator(min,max));
