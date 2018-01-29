const assert = require('assert');

describe('HTMLSelectElement',() => {
  describe('name',() => {
    it('should update the attribute',() => {
      const select = document.createElement('select');
      select.name = 'foobar';
      assert.equal(select.getAttribute('name'),'foobar');
    });
  });
});