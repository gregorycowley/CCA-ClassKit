'use strict';

const p5 = require('p5');
const { getFillColor } = require('./p5-sketch/color/colorController');

//Starting out sketch and
//injecting p5, as the param p, into our sketch function.
const sketch = (p) => {

  p.setup = () => {
    // Create the canvas
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    let fillColor = getFillColor(p.mouseIsPressed);
    p.fill(fillColor)

    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
}

//Instantiates P5 sketch to keep it out of the global scope.
const app = new p5(sketch);