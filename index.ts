import inquirer from "inquirer";
const currency : any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_Answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name : "to",
    message : "Enter To currency",
    type : "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name : "amount",
    message : "Enter Your Amount",
    type : "number"
  }
]);
let fromamount = currency[user_Answer.from]
let toamount = currency[user_Answer.to]
let amount = user_Answer.amount
let base_amount = amount / fromamount
let convertedamount = base_amount * toamount
console.log(convertedamount)
