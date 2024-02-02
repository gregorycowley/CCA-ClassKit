//Gravity Acceleration 
#include "LIS3DHTR.h" 

#ifdef SOFTWAREWIRE
  #include <SoftwareWire.h>
  SoftwareWire myWire(3, 2); 
  LIS3DHTR<SoftwareWire> LIS(I2C_MODE);//IIC 
  #define WIRE myWire
#else
  #include <Wire.h>
  LIS3DHTR<TwoWire> LIS;//IIC 
  #define WIRE Wire
#endif

void setup() {
  Serial.begin(9600);
  while (!Serial) {};
  LIS.begin(WIRE); //IIC init
  delay(100); 
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
  if (!LIS) {
    Serial.println("LIS3DHTR didn't connect."); 
    while (1);
    return;
  }
  //3 axis
  Serial.print("x:"); 
  Serial.print(LIS.getAccelerationX()); 
  Serial.print(" ");
  Serial.print("y:"); 

  Serial.print(LIS.getAccelerationY()); 
  Serial.print(" ");
  Serial.print("z:"); 

  Serial.println(LIS.getAccelerationZ()); 

  delay(500);
}
