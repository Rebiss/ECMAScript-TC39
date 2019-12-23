/**
 * 
 * !Lcg function....
 */
const seed = 1;

const Lcg = () => {
    const a = 16807;
    const m = 0x7fffffff;

    return seed * (a % m);
 
}

console.log( '****', Lcg())