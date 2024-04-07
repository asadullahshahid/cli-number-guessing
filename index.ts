#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor (Math.random () * 6 + 1); 


const answers = await inquirer.prompt([
{
    name : "UserGuessednumber",
    type : "number",
    message: "Please guess a number", 

}

]);
if (answers.UserGuessednumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}else { 
    console.log ("you guessed wrong number");
}
