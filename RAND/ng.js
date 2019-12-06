/**
 * @NumberRundomGenerator
 */


const rundomNumber = () => {
    const random = Math.floor( Math.random() * 100 );
    const time = new Date().getUTCMilliseconds();
    console.log('***',random, time)

    return time + 8 * Math.floor(Math.log2(random) * 10);
}

console.log( rundomNumber() )