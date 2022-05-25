const calculateDelta = ({ a, b, method, }, n = 0) => {
    const result = b - a;
    let delta = 0;
    if(n !== 0)
        delta = result / n;
    else
        delta = result / Methods[method];
    return delta;
}

export const calculate = ({ a, b, method, }, n = 0) => {
    const delta = calculateDelta({ a, b, method }, n);
    let table = [];
    for(i = a; i !== b; i+=delta){
        table.push(new Table());
        console.log(i);
    }
}

class Methods {
    static boole = new Methods(4);
    static simpsont = new Methods(3);
    static simpsonu = new Methods(2);
    
    constructor(value){
        this.value = value;
    }
}

class Table {
    constructor(x, y, result){
        this.x = x;
        this.y = y;
        this.result = result;
    }
}