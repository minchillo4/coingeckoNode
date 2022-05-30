const axios = require('axios')
const agora = new Date().getTime()
const fs = require("fs");



                                    // get data

function getBTCData() {
    const btcDay0 = 1367042399
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${btcDay0}&to=${agora}`,{responseType: 'blob',});
  }
  
  function getETHData() {
    const ethDay0 = 1438840799
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${ethDay0}&to=${agora}`,{responseType: 'blob',});
  }
  
  Promise.all([getBTCData(), getETHData()])
    .then(function (results) {
      const acct = results[0];
      const perm = results[1];
      const rows = acct.data.prices;

      var csv = rows.map(function(d){
        return d.join();
    }).join('\n');
    // console.log(csv);
console.log(acct.data.prices);



}); 
                          



