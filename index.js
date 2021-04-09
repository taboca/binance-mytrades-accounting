const Binance = require('node-binance-api');
const Keys    = require('./config-REMOVETHIS.js');

const binance = new Binance().options(Keys);

// This example shows how to pass options

let options = { 
  limit: 2 // Limit results to two entries
};

binance.trades("BTCBRL", (error, trades, symbol) => {  
  for(let k in trades) { 
    let trade = trades[k];
    let tradeDateTime = new Date(trade.time);
    console.log(`Trade event --------------------------------`);
    console.log(`time             : ${tradeDateTime}`);
    console.log(`symbol           : ${trade.symbol}`);
    console.log(`price            : ${trade.price}`);
    console.log(`quantity         : ${trade.qty}`);
    console.log(`commission fee   : ${trade.commission}`);
    console.log(`commission asset : ${trade.commissionAsset}`);
    console.log(`Is buyer         : ${trade.isBuyer}`);
    console.log(`Is Maker         : ${trade.isMaker}`);
//    console.log(trade);
  }
}, options);

