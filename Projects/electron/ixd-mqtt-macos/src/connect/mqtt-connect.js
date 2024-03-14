'use strict'

/**
 * Create a new MQTT client
 * 
    # Subscribe to test topic
    node mqtt-cli.js sub -t test

    # Publish an MQTT message
    node mqtt-cli.js pub -t test -m 'Hello MQTT!'

    #
    # 

 */

const mqtt = require('mqtt');
const protocol = 'mqtt';
const host = '192.168.86.95';
const port = 1883;
const clientId = `electron_app_01`;

// Quality of Service (QoS):
// QoS 0: At most once delivery
// QoS 1: At least once delivery
// QoS 2: Exactly once delivery
const QOS = 2;

const connectUrl = `${protocol}://${host}:${port}`;
const topic = 'electron';

const connect = () => {

  // console.log('Connecting to', connectUrl);
  const client = mqtt.connect(connectUrl, {
    qos: QOS,
  });

  // Event Handlers:

  client.on('connect', (...args) => {
    // console.log('Connected', args);
  })

  client.subscribe([topic], (...args) => {
    // console.log(`Subscribe to topic '${topic}'`, args);
  })

  // client.on('message', (topic, msgBuffer) => {
  //   let strMessage = msgBuffer.toString();
  //   // console.log("Cleint has received a message : ", topic, strMessage);
  // })

  client.on('offline', (...args) => {
    // console.log('Client is offline', args);
  });
  
  client.on('reconnect', (...args) => {
    // console.log('Reconnecting to MQTT broker', args);
  });
  
  client.on('end', (...args) => { 
    // console.log('Connection to MQTT broker ended', args);
  });

  return client;
}


module.exports.mqttConnect = connect;