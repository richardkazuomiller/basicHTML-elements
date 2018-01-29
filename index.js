const elements = require('./lib/elements');
const elementsByTagName = require('./lib/elements-by-tag-name');

module.exports = {
  elements,
  elementsByTagName,
  defineOnRegistry (customElements) {
    for(const [tag,elementClass] of elementsByTagName) {
      customElements.define(tag,elementClass);
    }
  }
};