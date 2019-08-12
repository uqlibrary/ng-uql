#!/bin/bash

printf "Node "; node -v
printf "npm v"; npm -v

npm install -g bower gulp

npm install && bower install
