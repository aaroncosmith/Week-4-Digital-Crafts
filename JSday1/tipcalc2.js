// #prompt user for two things, total bill amount and the level of service- good, fair, or bad

// #calc tip amount and the total amount
// #(bill amount + tip amount)
// #good -> 20%
// #fair -> 15%
// #bad -> 10%


// #start with user inputs

const total_amount =  parseInt(prompt("Total bill amount?: $"));
const service_level = prompt("Level of service? (good, fair, or bad): ");
let tip_amount = 0;

switch (service_level) {
    case "good":
        tip_amount = total_amount * .20
        break;
    case "fair":
        tip_amount = total_amount * .15
        break;
    case "bad":
        tip_amount = total_amount * .10
        break;
    default: 
        console.log("Sorry, you've typed something wrong! Please try again!");

}

const total_with_tip = total_amount + tip_amount;

console.log("TIPMONT:" + tip_amount);
console.log("TOTEMNT:" + total_with_tip);















// this is some weak code, I will improve upon it later but I need to move on