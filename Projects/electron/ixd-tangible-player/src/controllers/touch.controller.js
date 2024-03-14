// Respond to on touch events
function onTouchStart(event) {
  event.preventDefault();
  var touch = event.touches[0];
  var x = touch.pageX;
  var y = touch.pageY;
  var tile = getTile(x, y);
  if (tile) {
    tile.click();
  }
}

function onTouchMove(event) {
  event.preventDefault();
  var touch = event.touches[0];
  var x = touch.pageX;
  var y = touch.pageY;
  var tile = getTile(x, y);
  if (tile) {
    tile.click();
  }
}

function onTouchEnd(event) {
  event.preventDefault();
  var touch = event.changedTouches[0];
  var x = touch.pageX;
  var y = touch.pageY;
  var tile = getTile(x, y);
  if (tile) {
    tile.click();
  }
}

// Map multi-touch to patterns
function onTouchStart(event) {
  event.preventDefault();
  var touches = event.touches;
  var pattern = [];
  for (var i = 0; i < touches.length; i++) {
    var touch = touches[i];
    var x = touch.pageX;
    var y = touch.pageY;
    var tile = getTile(x, y);
    if (tile) {
      pattern.push(tile);
    }
  }
  if (pattern.length > 0) {
    var patternString = pattern.join('');
    var action = patternMap[patternString];
    if (action) {
      action();
    }
  }
}