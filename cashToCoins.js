const dollarAmount = 12.10;
const piggyBank = {}

value = [25, 10, 5, 1];
numCoins = [];
var money = dollarAmount * 100;

for(var i = 0; i < value.length; i++) {

    var count = money / value[i];
    var rounded = Math.trunc(count);   
    numCoins[i] = rounded;
    money -= (rounded * value[i]);
}

console.log(numCoins);

// I haven't been able to figure out how to fill the piggyBank property values with the values in the numCoin array :/

piggyBank.quarters = numCoins[0];
piggyBank.dimes = numCoins[1];
piggyBank.nickels = numCoins[2];
piggyBank.pennies = numCoins[3];

console.log(piggyBank);







// for (key in piggyBank) {
//     piggyBank[key] = populateObj(piggyBank[key]); 
// }

// function populateObj(coins) {
//     for (var i = 0; i < 4; i++) {
//         numCoins[i];
//     }
// }