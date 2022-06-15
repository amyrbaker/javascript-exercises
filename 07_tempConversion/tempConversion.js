const ftoc = function(fahTemp) {
  return +((fahTemp - 32) * 5 / 9).toFixed(1)
};

const ctof = function(celTemp) {
  return +(celTemp * 9 / 5 + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
