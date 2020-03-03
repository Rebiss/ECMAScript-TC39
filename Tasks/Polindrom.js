const index = 'I did, did I';


const isPolindrom = inStr => {
    inStr = inStr.toLowerCase();

    for(let i=0; i < inStr.length; i++) {

        if(inStr[i] !== inStr[inStr.length -1 -i]) return false;

        return true;
    }    
}

console.log(isPolindrom(index));

const str = 'id id id id'

const isRepit = inComing => {
    inComing = inComing.replace(/\W/g, '');
    inComing = inComing.toLowerCase();

    return inComing === inComing.split('').reverse().join('');
}

console.log('REPATE===> ', isRepit(str))