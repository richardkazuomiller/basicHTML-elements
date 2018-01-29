const {Document, CustomElementRegistry} = require('basichtml');
const basicHTMLElements = require('..');


const customElements = new CustomElementRegistry();

basicHTMLElements.defineOnRegistry(customElements);

global.document = new Document(customElements);