//ES6 Class

class Chat {
    constructor() {
        this.emit = emit;
        this.on = on;
        this.send = send;
        this.done = true;
    }

    complit() {
        this.done = false;
    }

    static getDefaultTitel() {
        return 'Task'
    }

}



const chat = new Chat();

chat.complit();