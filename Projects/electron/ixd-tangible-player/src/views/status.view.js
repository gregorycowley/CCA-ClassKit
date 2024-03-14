
function statusView(model) {
  return `
    <div class="status">
      <h2>Status</h2>
      <p><span>ID: </span>${model.getId()}</p>
      <p><span>Name: </span>${model.getName()}</p>
      <p><span>X Offset, Y Offset: </span>${model.getXOffset()},${model.getYOffset()}</p>
      <p><span>Radius: </span>${model.getRadius()}</p>
      <p><span>Status: </span>${model.getStatus()}</p>

      <p><span>X Pos: </span>${model.getXPosition()}</p>
      <p><span>Y Pos: </span>${model.getYPosition()}</p>
      <p><span>Rotation: </span>${model.getRotation()}</p>
      <p><span>RMS: </span>${model.getRMS()}</p>
    </div>
  `;
}

exports.statusView = statusView; 