export{};

/* We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

let prices: number[] = [500, 1000, 1250, 175, 800, 120];

let totalSpending:number = prices
  .reduce(function(sum, element) {
    return sum + element;
});
console.log(totalSpending)


let highestSpending: number = Math.max(...prices)
console.log(highestSpending)

let avgSpending:number = prices.reduce(function(sum, element) {
    return sum + element;
})/prices.length

// totalSpending/prices.lenght
console.log(avgSpending)