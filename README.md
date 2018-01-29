# basicHTML-elements

Some elements that extend basicHTML's HTMLElement

## What is this?

This is a set of minimal implementations of HTML elements. I mainly made it to reproduce the bare minimum functionality to run tests of cutom elements in Node and do SSR. Basically, when I need my Node.js DOM to do something that `HTMLElement` doesn't know how to do, but a standard element like `HTMLFormElement` does, I'll implement it here.

The goal is to be able to run any code written to modify a browser DOM in Node.js.

It's a work in progress, so if it doesn't do something you need it to do, it would be great if you could implement it and submit a PR!

## What this isn't

This is not 100% spec compliant. There are some things that behave differently from how they do on the web. For example, updating the `value` property of an `HTMLInputElement` also updates the `value` attribute of the element, which doesn't happen in the browser. This is so the value of the element created in Node can be sent as part response.

Other differences includes iterables being instance of arrays where they would not be in the browser, which is also the case for basicHTML.

## How to use

```
const basicHTML = require('basichtml');
const basicHTMLElements = require('basichtml-elements');

const customElements = new basicHTML.CustomElementRegistry();
// define form, input, button, etc in the custom elements registry
basicHTMLElements.defineOnRegistry(customElements);

const document = new basicHTML.Document(customElements);

document.body.innerHTML = `
  <form>
    <input name="myInput" value="It works!" />
  </form>
`

const form = document.querySelector('form');
form.onsubmit = () => {
  console.log(form.elements.myInput.value);
};

form.submit() // It works!
```
