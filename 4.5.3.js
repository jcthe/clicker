const readLine = require('readline-sync');


let sandwich = readLine.question("What type of sandwich would you like(chicken, beef, or tofu):");



let sandwichCost = {
    chicken: 5.25,
    beef: 6.25,
    tofu: 6.75,
};





let beverage = readLine.question("Would you like a beverage with that:");

let beverageSize = readLine.question("What size would you like small:$1.00, medium: 1.75, large:2,25:");


console.log("Your total so far is 6.25 ");



let beverageCost ={
    small: 1.00,
    medium: 1.75,
    large: 2.25,
};




let frenchfries  = readLine.question("Would you like fires  with that too  small: $1,00 medium: $1.50 large: $2,00:");





