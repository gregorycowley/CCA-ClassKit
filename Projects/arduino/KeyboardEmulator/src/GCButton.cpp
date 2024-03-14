// Implementation of the GCButton class.

#include "GCButton.h"

GCButton::GCButton(int pin, const char* keyChar, int debounceDelay) {
  _pin = pin;
  _keyChar = keyChar;
  _debounceDelay = debounceDelay;
  _lastDebounceTime = 0;
  _lastButtonState = LOW;
  _buttonState = LOW;
  _buttonPressed = false;
  _buttonReleased = false;
  _buttonHeld = false;
  _buttonHeldLong = false;
}

// Define a destructor to clean up any memory allocation.
GCButton::~GCButton() {
}

void GCButton::begin() {
  pinMode(_pin, INPUT_PULLUP);
}

void GCButton::update() {
  int reading = digitalRead(_pin);

  // millis() returns an unsigned long.

  if (reading != _lastButtonState) {
    _lastDebounceTime = millis();
  }

  if ((millis() - _lastDebounceTime) > _debounceDelay) {
    if (reading != _buttonState) {
      _buttonState = reading;

      if (_buttonState == HIGH) {
        _buttonPressed = true;
        _buttonReleased = false;
        _buttonHeld = false;
        _buttonHeldLong = false;
      } else {
        _buttonPressed = false;
        _buttonReleased = true;
        _buttonHeld = false;
        _buttonHeldLong = false;
      }
      GCButton::printState();
    } else {
      if (_buttonState == HIGH) {
        if ((millis() - _lastDebounceTime) > _debounceDelay + 1000) {
          _buttonPressed = false;
          _buttonReleased = false;
          _buttonHeld = false;
          _buttonHeldLong = true;
        } else if ((millis() - _lastDebounceTime) > _debounceDelay + 500) {
          _buttonPressed = false;
          _buttonReleased = false;
          _buttonHeld = true;
          _buttonHeldLong = false;
        } else {
          _buttonPressed = false;
          _buttonReleased = false;
          _buttonHeld = true;
          _buttonHeldLong = false;
        }
      }
    }
  }

  _lastButtonState = reading;
  
}

void GCButton::printState() {
  Serial.print("Button ");
  Serial.print(_pin);
  Serial.print(" state: ");
  Serial.print(_buttonState);
  Serial.print(" pressed: ");
  Serial.print(_buttonPressed);
  Serial.print(" released: ");
  Serial.print(_buttonReleased);
  Serial.print(" held: ");
  Serial.print(_buttonHeld);
  Serial.print(" held long: ");
  Serial.println(_buttonHeldLong);
}