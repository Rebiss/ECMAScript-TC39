/**
 * * fromEnteris,entries,values
 * !.entries() for Object and Array; Object => Array.
 */

const users = {
    firstName: 'Andriano',
    lastName: 'Chelatano', 
};
const root = [
    [Symbol('pass')] : 'rootik',
    name: 'Azazelo',
];
const name = ['A','B','C','E','Q'];
const array = [['A', 1],['B', 2],['C', 3]];

Object.entries(users); //=> [['firstName','Andriano'],['lastName','Chelatano']]
Object.entries(name);  //=> [['0','A'], ['1', 'B'], ...];
Object.entries(root); //=> [ ['name', 'rootik'] ]; ignorie Symbole key;

/**
 * !.fromEnteris(), Array => Object.
 */

 Object.fromEnteris(array); //=> { A: 1, B:2, C:3 }#

 /**
  * !.values() return Array value object.
  */

  Object.values(users); //=> [ 'Andriano', 'Chelatano' ];



  /**
   * *getOwnPropertyDiscriptors
   * !.getOwnPropertyDiscriptors
   */

const PersonList = {
    name: 'Bill',
    age: '65',
    set personName(name) {
        this.name = name;
    },
    get password() {
        return `${this.name}${this.age}`
    },
}

const admin = { ...PersonList };
/const admin = Object.assign({}, PersonList )

console.log('****',PersonList);
console.log('****',PersonList.password);

console.log(Object.getOwnPropertyDescriptors(PersonList));
console.log(Object.getOwnPropertyDescriptors(admin))

//Copy
const copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(PersonList));
console.log(Object.getOwnPropertyDescriptors(copy));
