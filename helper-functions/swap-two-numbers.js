const swap = (a, b) => {
    const temp = a;
    a = b;
    b = temp;
    return [a, b];
}

module.exports = swap;