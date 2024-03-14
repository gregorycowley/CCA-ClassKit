
// Draw a circle on screen
const drawCircle = ( x, y, radius, color ) => {
  context.beginPath();
  context.arc( x, y, radius, 0, Math.PI * 2, false );
  context.fillStyle = color;
  context.fill();
  context.closePath();
};

// update the circle's position
const update = (x, y) => {
  puck.x = x;
  puck.y = y;
  draw();
};

function polarToCartesian(r, theta) {
  let thetaRadians = theta * Math.PI / 180;
  let x = Math.floor(r * Math.cos(thetaRadians));
  let y = Math.floor(r * Math.sin(thetaRadians));
  return { x: x, y: y };
}

const draw = (rot) => {
  // drawCircle(puck.x, puck.y, puck.radius, 'black');
  // console.log('draw');
  const puckDiamter = 200;
  const indicatorDiameter = 30;
  const offX = (puckDiamter/2) - (indicatorDiameter/2);
  const offY = (puckDiamter/2) - (indicatorDiameter/2);
  let polarCoordinates = { r: 70, theta: rot }; // theta in degrees
  let pos = polarToCartesian(polarCoordinates.r, polarCoordinates.theta);
  const indicator = document.getElementById('puck1').querySelector('.indicator');
  indicator.style.left = `${offX + pos.x}px`;
  indicator.style.top = `${offY + pos.y}px`;
  // console.log('indicator', indicator);
}

module.exports.puckView = () => {
  // let rot = 0;
  // const intv = setInterval(() => {
  //   // console.log('setTimeout');
  //   draw(rot += 10 % 360);
  // }, 100);
  return `
    <div id="puck1" class="puck">
      <span class="indicator">
      </span>
    </div>
  `;
}
