const index = 'adr';


const isPolindrom = inStr => {
    inStr = inStr.toLowerCase();

    for(let i=0; i < inStr.length; i++) {

        if(inStr[i] !== inStr[inStr.length - 1 - i]) return false;

        return true;
    }    
}

console.log(isPolindrom(index));

// const str = 'id id id id'

// const isRepit = inComing => {
//     inComing = inComing.replace(/\W/g, '');
//     inComing = inComing.toLowerCase();

//     return inComing === inComing.split('').reverse().join('');
// }

// console.log('REPATE===> ', isRepit(str))
const word = 'Andrannnik barev vzgo'
// w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
const duplicateEncode = (word) => {
    return word
      .toLowerCase()
      .split('')
      .map( (a, i, w) => console.log(w.indexOf(a) == w.lastIndexOf(a) ) )
      .join('');
  }

  console.log('DUbli=====', duplicateEncode(word))