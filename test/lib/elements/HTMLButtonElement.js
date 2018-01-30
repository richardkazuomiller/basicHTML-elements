const assert = require('assert');

describe('HTMLButtonElement',() => {
  describe('click',() => {
    it('should submit a form if it is in one, default is not prevented, and it is not a cancel button',() => {
      let submitted = false;
      document.body.innerHTML = `<form>
        <button>Foo</button>
      </form>`;
      document.querySelector('form').onsubmit = () => (submitted = true);
      document.querySelector('button').click();
      assert.equal(submitted,true);
    });
    it('should not submit the form if event default is prevented',() => {
      let submitted = false;
      let clicked = false;
      document.body.innerHTML = `<form>
        <button>Foo</button>
      </form>`;
      document.querySelector('form').onsubmit = () => (submitted = true);
      document.querySelector('button').onclick = (e) => {
        e.preventDefault();
        clicked = true;
      };
      document.querySelector('button').click();
      assert.equal(clicked,true);
      assert.equal(submitted,false);
    });
    it('should work if not in a form',() => {
      let clicked = false;
      document.body.innerHTML = `<button>Foo</button>`;
      document.querySelector('button').onclick = () => {
        clicked = true;
      };
      document.querySelector('button').click();
      assert.equal(clicked,true);
    });
  });
  describe('name',() => {
    it('should update the attribute',() => {
      const button = document.createElement('button');
      button.name = 'foobar';
      assert.equal(button.getAttribute('name'),'foobar');
    });
  });
});