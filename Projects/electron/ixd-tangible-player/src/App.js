'use strict';

const puckModel = require('./models/puck');
const statusView = require('./views/status.view');
const puckView = require('./views/puck.view');

const id = 1;
const name = 'puck';
const xOffset = 0;
const yOffset = 0;
const radius = 10;
const status = 'active';
const xPosition = 0;
const yPosition = 0;
const rotation = 0;
const rms = 0;
const puck = puckModel.puck(id, name, xOffset, yOffset, radius, status, xPosition, yPosition, rotation, rms);

function App(){
  return `
    ${statusView.statusView(puck)}
    ${puckView.puckView()}
  `;
}

module.exports = App;