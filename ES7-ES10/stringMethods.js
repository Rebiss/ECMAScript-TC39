//padStart and padEnd;

const string = 'Exapmle'

string.padStart(11, '@'); // '@@@@@@@@@@@@@Example'
string.padEnd(3, '@'); // 'Example@@@'

string.padStart(11); // '          Example'
string.padEnd(3); // 'Example   '

//startsWith() and endsWith()

const str = 'Barev, Tavari cav';

str.startsWith('Barev'); //True
str.startsWith('Uxt'); // false
str.endsWith('cav'); // True
str.endsWith('gvenik'); //false

str.startsWith('Tavar', 8) // start 8 => true
str.endsWith('Tavar', 13) // after 'Barev, Tavari'


str.trimStart();
str.trimEnd();