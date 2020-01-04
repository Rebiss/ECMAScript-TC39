const names = ['Aharon', 'Vanik', 'Sbulik'];

//for-of
for(let name of names) {
    console.log(name)
}

// Base async Array...

const a = [
    new Promise(resolve => resolve('Aharon')),
    new Promise(resolve => resolve('Vanik')),
    new Promise(resolve => resolve('Sbulik')),
];
//example1
const result = async () => {
    for (let name of a) {
        console.log(name)
    }
}

result() // Promise, Promise, Promise

//example2

const result = async () => {
    for await (let name of a) {
        console.log(name)
    }
};

result(); //'Aharon', 'Vanik', 'Sbulik';


//Async generator function...

async function* foo(path) {
    let file = await fileOpen(path)

    try {
        while(!file.EOF) {
            yield await file.fooo();
        }
    } finally {
        await file.close();
    }
};

for await (const line of foo(filePath)){
    console.log(lines);
}