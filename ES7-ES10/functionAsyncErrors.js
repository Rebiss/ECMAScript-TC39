//Base Error Hendle => try/catch

const fetchData = () => new Promise(resolve => {setTimeout( () => resolve('EcmaScript 8'), 1000)});

const showData = async () => {
    try {
        const fetchHeadData = await fetchData();
        console.log('*******=>', fetchHeadData)
    } catch (error) { //clear (error)
        console.log(error) // set messge console.log('auuuuuu....')
    }
}

//Example2
const showData = async () => {
    const fetchHeadData = await fetchData().catch( err => console.log(err) );
    console.log('*******=>', fetchHeadData)
}

showData();

//Example3
const showData = async () => {
    const fetchHeadData = await fetchData();
    console.log('*******=>', fetchHeadData)
}

showData()
    .then(console.log('Data'));
    .catch(error => console.log(error));


//Using 'finally' Example4

const showData = async () => {
    try {
        const bool = true;
        const fetchHeadData = await fetchData();
        console.log('*******=>', fetchHeadData)
    } catch {
        console.log('auuuuuu....');
    } finally {
        bool = false; // Code work time.... finally => false
    }
}

showData();