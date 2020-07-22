function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function maxProfit(arr) {
  let maxprofit = 0;
  let buyIndex = 0;
  let sellIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    let buy = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let sell = arr[j];
      let profit = sell - buy;

      if (profit > maxprofit) {
        maxprofit = profit;
        buyIndex = i;
        sellIndex = j;
      }
    }
  }
  console.log(`bought at ${arr[buyIndex]}, sold at ${arr[sellIndex]}`);
  return maxprofit;
}

// console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));

let prices = [];
for (let i = 0; i < 7; i++) {
  prices.push(50 + getRandomInt(100));
}
console.log(prices);
console.log(maxProfit(prices));
