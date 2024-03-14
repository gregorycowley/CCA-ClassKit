// Path: src/puck.js

module.exports.puck = function puck( id, name, xOffset, yOffset, radius, status, xPosition, yPosition, rotation, rms ) {
  return {
    getId: () => id,
    getName: () => name,
    getXOffset: () => xOffset,
    getYOffset: () => yOffset,
    getRadius: () => radius,
    getStatus: () => status,
    getXPosition: () => xPosition,
    getYPosition: () => yPosition,
    getRotation: () => rotation,
    getRMS: () => rms,
  };
}
