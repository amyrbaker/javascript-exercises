const fibonacci = function(n) {
    let seq = [1, 1]
    while (seq.length < n) {
        seq.push(seq[seq.length - 2] + seq[seq.length - 1])
    }
    return seq[+n - 1] || 'OOPS'
};

// Do not edit below this line
module.exports = fibonacci;
