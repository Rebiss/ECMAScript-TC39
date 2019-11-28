/**
 * !.entries() for Object and Array; Object => Array.
 */

const users = {
    firstName: 'Andriano',
    lastName: 'Chelatano', 
};

const name = ['A','B','C','E','Q'];

const root = [
    [Symbol('pass')]: 'rootik',
    name: 'Azazelo',
]

Object.entries(users); //=> [['firstName','Andriano'],['lastName','Chelatano']]
Object.entries(name);  //=> [['0','A'], ['1', 'B'], ...];
Object.entries(root); //=> [ ['name', 'rootik'] ]; ignorie Symbole key;

/**
 * !.fromEnteris(), Array => Object.
 */

 const array = [['A', 1],['B', 2],['C', 3]];

 Object.fromEnteris(array); //=> { A: 1, B:2, C:3 }#

 /**
  * !.values() return Array value object.
  */

  Object.values(users); //=> [ 'Andriano', 'Chelatano' ];