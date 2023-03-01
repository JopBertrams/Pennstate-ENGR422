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
npm install onoff --save
npm install mqtt --save
```
