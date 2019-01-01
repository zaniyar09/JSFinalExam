var chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

function camelize (str) {
  return str
    .split('-') // my-long-word -> ['my', 'long', 'word']
    .map(
      (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}

describe('run cammelize', function () {
  it('must string without dash', function () {
    assert.equal(camelize('my-long-word'), 'myLongWord');
  });
});
