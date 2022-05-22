const meterify = require("meterify").meterify;
const Web3 = require("web3");
const web3 = meterify(new Web3(), "https://rpctest.meter.io:8869");

module.exports = web3;