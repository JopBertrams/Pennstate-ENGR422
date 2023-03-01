const pigpio = require('pigpio');
const mqtt = require('mqtt');

const ADC_PIN = 17; // Change this to the GPIO pin you connected the sensor module to
const MAX_ADC_VALUE = 4095; // Maximum value of the ADC. Analog value from the GPIO pin comes in as a 12-bit integer value ranging from 0 to 4095

const client = mqtt.connect('mqtt://host:port'); // Replace with your MQTT broker's address

pigpio.initialize();

const adc = pigpio.analogRead(ADC_PIN);

// This event is fired every time the ADC value changes
adc.on('change', (value) => {
  const voltage = (value / MAX_ADC_VALUE) * 3.3; // Calculate the voltage from the ADC reading
  const reading = voltage.toFixed(2); // Round the voltage to two decimal places

  // Publish the reading to the MQTT broker
  client.publish('sensor/reading', reading, { qos: 1 }, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Published ${reading} to MQTT broker`);
  });
});

//Signal listener that listens for the SIGINT signal, which is sent to a process when the user presses CTRL-C on the command line.
process.on('SIGINT', () => {
  adc.cancel();
  pigpio.terminate();
  client.end();
});
