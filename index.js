const Binance = require('node-binance-api');
const Keys    = require('./config.js');

const binance = new Binance().options(Keys);

// https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-trade-list-user_data

function go() { 
  
  let options = { 
    limit: 2 
  };
  
  binance.trades("BTCBRL", (error, trades, symbol) => {
    console.info(symbol+" trade history", trades);
  }, options);

}

go(); 

