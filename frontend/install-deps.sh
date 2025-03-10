#!/bin/bash

# Install dependencies
npm install

# Install the specific @tailwindcss/postcss package
npm install @tailwindcss/postcss@4.0.12 --save-dev

# Build the project
npm run build 