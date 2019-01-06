var chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

function AlphabetSoup (str) {
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

let word = 'coderbyte';

// let sortWord = AlphabetSoup(word);

describe('run aplphabetSoup for coderbyte', function () {
  it('must string equal to bcdeeorty', function () {
    assert.equal(AlphabetSoup(word), 'bcdeeorty');
  });

  it('returns sorted version of I Love New York', () => {
    assert.strictEqual(AlphabetSoup('ILoveNewYork'), 'eeIkLNoorvwY');
  });
});
