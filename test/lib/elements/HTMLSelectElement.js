const assert = require('assert');

describe('HTMLSelectElement',() => {
  describe('name',() => {
    it('should update the attribute',() => {
      const select = document.createElement('select');
      select.name = 'foobar';
      assert.equal(select.getAttribute('name'),'foobar');
    });
  });
  describe('options',() => {
    it('should return the options inside it', () => {
      document.body.innerHTML = `
        <select>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>`;
      const select = document.querySelector('select');
      assert.equal(select.options[0].getAttribute('value'),1);
      assert.equal(select.options[1].getAttribute('value'),2);
    });
  });
  describe('value',() => {
    it('should be the value of the first option if none are selected',() => {
      document.body.innerHTML = `
        <select>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>`;
      const select = document.querySelector('select');
      assert.strictEqual(select.value,'1');
    });
    it('should be the value of the selected option',() => {
      document.body.innerHTML = `
        <select>
          <option value="1">One</option>
          <option value="2" selected>Two</option>
        </select>`;
      const select = document.querySelector('select');
      assert.strictEqual(select.value,'2');
    });
    it('should be empty string by default',() => {
      document.body.innerHTML = `
        <select>
        </select>`;
      const select = document.querySelector('select');
      assert.strictEqual(select.value,'');
    });
  });
});