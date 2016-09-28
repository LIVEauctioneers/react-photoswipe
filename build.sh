#!/usr/bin/env bash

# Start fresh
echo "Deleting existing distribution...";
rm -rf ./lib;

echo "Transpiling source to destination...";
babel src -d lib;
