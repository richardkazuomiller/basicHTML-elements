const assert = require('assert');

const HTMLFormElement = require('../../../lib/elements/HTMLFormElement');

describe('HTMLFormElement',() => {
  it('should be assigned to the form tag',() => {
    const form = document.createElement('form');
    assert.equal(form.constructor,HTMLFormElement);
  });
  describe('submit',() => {
    it('should fire the submit event',async () => {
      await new Promise((resolve) => {
        const form = new HTMLFormElement();
        form.onsubmit = (e) => {
          assert.equal(e.target,form);
          resolve();
        };
        form.submit();
      });
    });
  });
  describe('elements',() => {
    it('should have a list of input elements',() => {
      const form = new HTMLFormElement();
      form.innerHTML = `
        <input type="text" name="foo" />
        <select name="bar">
          <option value="hoge">Hoge</option>
        </select>
        <button type="submit" name="submit">Submit</button>`;
      assert(!!form.elements.namedItem('foo'));
      assert(!!form.elements.namedItem('bar'));
      assert(!!form.elements.namedItem('submit'));
    });
    it('should work on deep dom trees',() => {
      const form = new HTMLFormElement();
      form.innerHTML = `
        <input type="text" name="foo" />
        <div>
          <select name="bar">
            <option value="hoge">Hoge</option>
          </select>
        </div>
        <button type="submit" name="submit">Submit</button>`;
      assert(!!form.elements.namedItem('foo'));
      assert(!!form.elements.namedItem('bar'));
      assert(!!form.elements.namedItem('submit'));
    });
    it('should work with multiple inputs of the same name',() => {
      const form = new HTMLFormElement();
      form.innerHTML = `
        <input type="text" name="foo" />
        <div>
          <select name="bar">
            <option value="hoge">Hoge</option>
          </select>
        </div>
        <input type="checkbox" name="multipleSelectable" />
        <input type="checkbox" name="multipleSelectable" />
        <input type="checkbox" name="multipleSelectable" />
        <input id="foo" />
        <button type="submit" name="submit">Submit</button>`;
      assert(!!form.elements.namedItem('foo'));
      assert(!!form.elements.namedItem('bar'));
      assert(!!form.elements.namedItem('submit'));
      assert.equal(form.elements.multipleSelectable.length,3);
    });
    it('shoud work with unnamed inputs',() => {
      const form = new HTMLFormElement();
      form.innerHTML = `<input id="foo" />`;
      assert(!!form.elements.find(element => element.id == 'foo'));
    });
  });
});