//#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//creat class
class Person {
    constructor() {
        this._personality = 'Mystery';
    }
    //user input
    userInput(input) {
        if (input.includes('talk to others abut yourself')) {
            this._personality = 'talk happly';
        }
        else if (input.includes('keep yor word to yorself')) {
            this._personality = 'talk rude';
        }
    }
    //return function
    get Personality() {
        return this._personality;
    }
}
//creat obj
class main {
    async main() {
        const ans = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'tell your behaviour?',
            choices: [
                '1 : talk to other about yourself.',
                '2 : keep quit and dont ask question.'
            ]
        });
        //creat a personal clsss
        let Myperson = new Person();
        Myperson.userInput(ans.choice);
        //output
        console.log(chalk.magenta(`Your personality is ${Myperson.Personality}`));
    }
}
const myObject = new main();
myObject.main();
