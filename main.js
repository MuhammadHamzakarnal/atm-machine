#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 42501;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please Select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        // =, +=, -=
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else if ((myBalance -= amountAns.amount)) {
            console.log(`"your remaining balance is:"  ${myBalance}`);
        }
    }
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "your fast cash amount is",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
