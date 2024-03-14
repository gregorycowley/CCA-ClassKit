// Allow for mouse control of puck when a touchscreen is not available






// Draw a circle with a radius of 10 pixels
function drawCircle( x, y, radius, color ) {
  
  context.beginPath();
  context.arc( x, y, radius, 0, Math.PI * 2, false );
  context.fillStyle = color;
  context.fill();
  context.closePath();
}




// const puck = puck(1, 'puck1', 0, 0, 10, 'active', 0, 0, 0, 0);
