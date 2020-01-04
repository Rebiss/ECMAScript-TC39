//Base Example (Promise => Callback hell)

const fetchData = () => new Promise(resolve => {setTimeout( () => resolve('EcmaScript 8'), 1000)});

const showData = async () => {
    const fetchHeadData = await fetchData();
    console.log('*******=>', fetchHeadData)
}

showData();

//OR

showData().then(data => console.log(data)); //ES8


// Example2

const a = () => new Promise( resolve => { setTimeout(console.log('ALLLLOOOOoooo'), 2000); });
const b = () => new Promise( resolve => { setTimeout(console.log('ES8'), 2000); });

const c = async () => {
    const fetchA = await a();
    const fetchB = await b();
    
    return `${fetchA} ${fetchB}`;
};
//Time = 4000ms
c().then(data => console.log(data)) // ALLLLOOOOoooo ES8

//Or
const g = async () => {
    const [fetchA, fetchB] = await Promise.all( a(), b() );

    return `${fetchA} ${fetchB}`;
}
//Time = 2000ms
g().then(data => console.log(data))