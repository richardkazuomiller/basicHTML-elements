const assert = require('assert');

describe('HTMLOptionElement',() => {
  describe('name',() => {
    it('should update the attribute',() => {
      const option = document.createElement('option');
      option.name = 'foobar';
      assert.equal(option.getAttribute('name'),'foobar');
    });
    it('should reflect the attribute',() => {
      const option = document.createElement('option');
      option.setAttribute('name','foobar');
      assert.equal(option.name,'foobar');
    });
  });
  describe('value',() => {
    it('should update the attribute',() => {
      const option = document.createElement('option');
      option.value = 'hoge';
      assert.equal(option.getAttribute('value'),'hoge');
    });
    it('should reflect the attribute',() => {
      const option = document.createElement('option');
      option.setAttribute('value','piyo');
      assert.equal(option.value,'piyo');
    });
    it('should be empty string by default',() => {
      const option = document.createElement('option');
      assert.strictEqual(option.value,'');
    });
  });
  describe('selected',() => {
    it('should make itself the only selected option', () => {
      document.body.innerHTML = `
        <select>
          <option value="1" selected>One</option>
          <option value="2">Two</option>
        </select>`;
      const select = document.querySelector('select');
      const option = document.createElement('option');
      option.value = '3';
      select.appendChild(option);
      option.selected = true;
      let selectedCount = 0;
      for(const child of document.querySelectorAll('option')) {
        if(child.selected) {
          selectedCount++;
          assert(child === option);
        }
      }
      assert.strictEqual(selectedCount,1);
    });
    it('should work if it does not have a parent', () => {
      const option = document.createElement('option');
      option.selected = true;
      assert(option.hasAttribute('selected'));
    });
  });
});