/**
 * 
 * !Lcg function....
 */
const seed = 1;

const Lcg = () => {
    const a = 16807;
    const m = 0x7fffffff;

    seed = seed * (a % m);

    return seed;
}

console.log( '****', Lcg())