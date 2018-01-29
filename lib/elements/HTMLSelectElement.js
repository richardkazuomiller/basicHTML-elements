const {HTMLElement} = require('basichtml');

class HTMLSelectElement extends HTMLElement {
  get name () {
    return this.getAttribute('name');
  }

  set name (val) {
    this.setAttribute('name',val);
  }
}

module.exports = HTMLSelectElement;