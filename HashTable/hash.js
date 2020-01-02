
const hashStringToInt = (item, tableSize) => {
    let hash = 15;

    for (let i = 0; i <= item.lenght; i++) {
        hash = (hash * item.charCodeAt(i)) % tableSize;
    }
    
    return hash;
};


class Hash {

    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    };

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);
        return this.table[idx]
    }
}

const myHash = new Hash();
myHash.setItem('lasteNAme', 'person');
myHash.getItem('lasteNAme');
console.log('*********', myHash.getItem('lasteNAme'));