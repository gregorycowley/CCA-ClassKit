#include <Arduino.h>
#include <Keyboard.h>

// Include the GCButton library
#include "GCButton.h"


// put function declarations here:
int myFunction(int, int);

  GCButton up_button(0, "w", 50);
  GCButton down_button(1, "x", 50);
  GCButton left_button(2, "a", 50);
  GCButton right_button(3, "d", 50);
  GCButton center_button(4, "s", 50);
  GCButton fire_button(5, "f", 50);


void setup() {
  // put your setup code here, to run once:
  // int result = myFunction(2, 3);

  Serial.begin(9600);

  up_button.begin();
  down_button.begin();
  left_button.begin();
  right_button.begin();
  center_button.begin();
  fire_button.begin();

  Serial.println("Ready!");
}

void loop() {
  // put your main code here, to run repeatedly:
  up_button.update();
  down_button.update();
  left_button.update();
  right_button.update();
  center_button.update();
  fire_button.update();

}

// put function definitions here:
int myFunction(int x, int y) {
  return x + y;
}