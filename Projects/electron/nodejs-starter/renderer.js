'use strict';

const app = require('./src/App')();

const root = document.getElementById('root');

root.innerHTML = app;
