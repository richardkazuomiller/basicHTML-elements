const assert = require('assert');

describe('HTMLInputElement',() => {
  describe('name',() => {
    it('should update the attribute',() => {
      const input = document.createElement('input');
      input.name = 'foobar';
      assert.equal(input.getAttribute('name'),'foobar');
    });
  });
});