const elements = require('./elements');

const {
  HTMLButtonElement,
  HTMLFormElement,
  HTMLInputElement,
  HTMLOptionElement,
  HTMLSelectElement
} = elements;

const elementsByTagName = new Map();

elementsByTagName.set('button',HTMLButtonElement);
elementsByTagName.set('form',HTMLFormElement);
elementsByTagName.set('input',HTMLInputElement);
elementsByTagName.set('option',HTMLOptionElement);
elementsByTagName.set('select',HTMLSelectElement);

module.exports = elementsByTagName;
