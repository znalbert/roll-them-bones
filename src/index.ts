'use strict';
const body = document.getElementsByTagName('body');
const greet = document.createElement('div');
const greeting = 'Hello, Multiverse.';

greet.textContent = greeting;
body[0].appendChild(greet);
