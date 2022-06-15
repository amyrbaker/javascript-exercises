const palindromes = function (str) {
    let forward = str.split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase())).join('')
    let backwards = forward.split('').reverse().join('')
    return forward.toLowerCase() === backwards.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
