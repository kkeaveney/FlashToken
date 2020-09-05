#!/usr/bin/env bash
rm -rf src/flats/*
./node_modules/.bin/truffle-flattener src/contracts/Token.sol > flats/Token_flat.sol
