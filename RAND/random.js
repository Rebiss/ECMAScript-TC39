//Random Method

const min = 1;
const max = 4;

const randomGenerator = (min, max) => { Math.floor(Math.random() * (max - min) + min) };
console.log(randomGenerator(min,max))