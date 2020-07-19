#include <WebUSB.h>

/**
 * Creating an instance of WebUSBSerial will add an additional USB interface to
 * the device that is marked as vendor-specific (rather than USB CDC-ACM) and
 * is therefore accessible to the browser.
 *
 * The URL here provides a hint to the browser about what page the user should
 * navigate to to interact with the device.
 */
WebUSB WebUSBSerial(1 /* https:// */, "gregorycowley.github.io/CCA-ClassKit/arduino/led/");

#define Serial WebUSBSerial

int led = 7;
int del = 1000;
int state = 0;

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n");
  Serial.flush();
  pinMode(led, OUTPUT);
}

void loop() {
  if (Serial && Serial.available()) {
    state = Serial.read();
    if (state == 1) {
      digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
      // delay(del);                       // wait for a second
    } else {
      digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
      // delay(del);      
    }
  }
}
