const assert = require('assert');

describe('HTMLInputElement',() => {
  describe('name',() => {
    it('should update the attribute',() => {
      const input = document.createElement('input');
      input.name = 'foobar';
      assert.equal(input.getAttribute('name'),'foobar');
    });
  });
  describe('value',() => {
    it('should update the attribute',() => {
      const input = document.createElement('input');
      input.value = 'hoge';
      assert.equal(input.getAttribute('value'),'hoge');
    });
    it('should reflect the attribute',() => {
      const input = document.createElement('input');
      input.setAttribute('value','piyo');
      assert.equal(input.value,'piyo');
    });
  });
});