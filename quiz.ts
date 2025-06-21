import chalk from "chalk";
import inquirer from "inquirer";
const APIlink="https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"

let fetchdata=async (data:string) => {
    let fetchquiz:any = await fetch(data)
    let res =await fetchquiz.json()
    return res.result;
}
let data = await fetchdata(APIlink)

console.log(data)