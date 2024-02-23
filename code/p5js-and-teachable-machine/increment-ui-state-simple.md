---
coverY: 0
---

# Increment UI State (Simple)

```javascript
/* ... your variable declarations */
let step = 1;

/* ... preload, setup, etc */

function gotResult(error, results) {

  /* ... error check, etc */
  
  
  // Your if statement with your own `label` and "Class" names
  if ( label == "Class" ) {
  
  } else if ( label == "Class1" && step == 1) {
    // ...your code...
    step = step + 1;
  
  } else if ( label == "Class2" && step == 2 ) {
    // ...your code...
    step = step + 1;
    
  } else if ( label == "Class3" && step == 3 ) {
    // ...your code...
    step = step + 1;
    
  } else if ( label == "Class4" && step == 4 ) {
    // ...your code...
    step = step + 1;
  }

  // Classifiy again!
  classifyVideo();
}










```
