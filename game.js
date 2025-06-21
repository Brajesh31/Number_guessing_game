#!/usr/bin/env node
import inquirer from "inquirer";
const randamnumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess your number between 1 to 10"
    }
]);
console.log("you Guess", answer.userGuess, "---", "SYs", randamnumber);
if (answer.userGuess === randamnumber) {
    console.log(`Hurry! your Guess ${answer.userGuess} is correct`);
}
else {
    console.log("Sorry! you guess the incorrect number, the correct number is", randamnumber);
}