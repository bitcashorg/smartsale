#!/bin/bash

# Install the necessary packages
apt-get update && apt-get install -y libudev-dev libusb-1.0-0-dev

# Continue with the build process
npm i -g node-gyp
bun install
