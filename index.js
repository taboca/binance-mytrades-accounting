const Binance = require('node-binance-api');
const Keys    = require('./config.js');

const binance = new Binance().options(Keys);

// This example shows how to pass options

let options = { 
  limit: 2 // Limit results to two entries
};

binance.trades("BTCBRL", (error, trades, symbol) => {
  console.info(symbol+" trade history", trades);
}, options);

