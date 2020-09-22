//Button to turn ON/OFF LED
//Constants won't change. They're used here to set pin numbers:

const int buttonPin = 6; const int ledPin = 4;

// variables will change:
int buttonState = 0; 

// the number of the pushbutton pin
// the number of the LED pin
// variable for reading the pushbutton statu
void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
// read the state of the pushbutton value: 
buttonState = digitalRead(buttonPin);
// check if the pushbutton is pressed. If it is, the buttonState is HIG H:
if (buttonState == HIGH) {
// turn LED on: 
digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
} 
}