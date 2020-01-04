includs();
flat(); //Shalow
flat(3); // level 3 deep
flat(Infinity;) //Deep

const array = [[1], [2], [3]];
array.flatMap(i => [i*5]); // [[5], [10], [15]]