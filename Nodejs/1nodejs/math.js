function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}


const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

// module.exports = sub;
// module.exports = add;

export {add, sub};

module.exports = {add, sub};