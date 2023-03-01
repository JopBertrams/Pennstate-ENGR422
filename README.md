# Pennstate ENGR422 Project

Step-by-step guide:
1. Install Node.js on the Raspberry Pi
```
sudo apt-get update
sudo apt-get upgrade
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
2. Verify Node.js is installed with `node -v`

3. Install the required Node.js libraries
```
npm install pigpio --save
npm install mqtt --save
```

4. Connect the sensor module to the Raspberry Pi. The pH output pin on the sensor module gets connected to GPIO pin 17 on the Raspberry Pi, the ground and 5VDC pin on the sensor module gets connected to the 5VDC and ground pin on the Raspberry Pi. (Use images below as a reference)

<img src="https://github.com/JopBertrams/Pennstate-ENGR422/blob/main/images/raspberry_gpio.jpg" width="600">

*Raspberry Pi pin layout*

<img src="https://github.com/JopBertrams/Pennstate-ENGR422/blob/main/images/pins_explained.jpg">

*Sensor module pin layout*

<img src="https://github.com/JopBertrams/Pennstate-ENGR422/blob/main/images/connection.jpg">

*Connect the red wire with pin 2 or 4 on the Raspberry Pi (5VDC), the black wire to pin 6,9,14,20,25,30,34 or 39 (GND) and the blue wire to pin 11 (GPIO 17)*

5. Create a file named `app.js`

6. Copy the contents from `app.js` in this repository to the just created file

7. Save the file and run it with `node app.js`
