#!/bin/sh

echo -----------------------------------------------------
echo "Running Server and Client"
echo -----------------------------------------------------

eval "npm --prefix ./server run start & npm --prefix ./client run start"
