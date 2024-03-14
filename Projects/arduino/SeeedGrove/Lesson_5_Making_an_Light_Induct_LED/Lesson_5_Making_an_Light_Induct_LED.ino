// Light Switch
int sensorpin = A6; // Analog input pin that the sensor is attached to
int ledPin = 4;  // LED port
int sensorValue = 0; 
int outputValue = 0;

void setup() { 
  pinMode(ledPin,OUTPUT); 
  Serial.begin(9600);
}

// value read from the port
// value output to the PWM (analog out)
void loop() {
  // read the analog in value:
  sensorValue = analogRead(sensorpin);

  // map it to the range of the analog out: 
  outputValue = map(sensorValue, 0, 1023, 0, 255); 
  Serial.println(sensorValue);
  
  // change the analog out value: 
  analogWrite(ledPin, outputValue);
  delay(30);

}