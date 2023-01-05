
'use strict';

const generator = require('cucumber-html-reporter');
const options = {
    theme: 'bootstrap',
    jsonFile: `./results/chrome.json`,
    output: `./results/chrome.html`
};

generator.generate(options);