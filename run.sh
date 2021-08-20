#!/bin/bash

if [[ $EUID -ne 0 ]]
then
  echo "This script must be run as root" 
else
  chmod +x ./backend/script
  docker-compose down
  docker-compose up -d
fi