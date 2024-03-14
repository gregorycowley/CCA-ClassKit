#include <Arduino.h>

#ifndef GCBUTTON_H
#define GCBUTTON_H


class GCButton {
public:
  GCButton(int,const char*,int);
  ~GCButton(); // Destructor
  void update();
  void begin();
  void press();
  void release();
  void setPin(int pin);
  int getPin();
  void printState();
private:
  int _pin;
  unsigned long _debounceDelay = 0;
  unsigned long _lastDebounceTime = 0;
  const char* _keyChar = "";
  int _lastButtonState = LOW;
  int _buttonState = LOW;
  bool _buttonPressed = false;
  bool _buttonReleased = false;
  bool _buttonHeld = false;
  bool _buttonHeldLong = false;
};

#endif