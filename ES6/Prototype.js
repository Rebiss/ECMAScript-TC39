const User = {
    name: 'Lernik',
    age: 65,
    greet: function() {
        console.log('Araaaaq')
    }
}

const Person = new Object({
    name: 'Lernik',
    age: 65,
    greet: function() {
        console.log('Araaaaq')
    }
})

Object.prototype.newHandler = function() {
    console.log('new Handler')
}

const Veronika = Object.create(User);
Veronika.name = 'Veronika'

console.log(Veronika.name, User.name)