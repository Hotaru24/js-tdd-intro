const assert = require('assert');

const capitalizeFirstLetters = (input) => {
  return input.length > 0 
          ? input.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
          : '';
};

// Check that capitalizeFirstLetters transforms multy words correctly
assert.strictEqual(capitalizeFirstLetters('javaScript top tip'), 'JavaScript Top Tip');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

  
module.exports = capitalizeFirstLetters;
