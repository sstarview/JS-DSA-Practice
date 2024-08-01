const swap = (a, b) => {
    const temp = a;
    a = b;
    b = temp;
    return [a, b];
}

const swapNumberByAddition = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

module.exports = { swap, swapNumberByAddition }