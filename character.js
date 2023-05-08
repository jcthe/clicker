//create an arry to store  dice rolls
//create a function to roll a d6
// create a function to roll many dice
// create a function to update a char
// create a function to display char
const readLine = require('readline-sync');

let diceRolled =[];
let character1 ={
    //empty to start
}


createChar(character1, diceRolled);

function rolled6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (i=0; i<amount; i++){
        let roll = rolled6();
        console.log(`you rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list[i]
    }
    return sum;
}

function rollStat(list){
    list= [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list) {
    character.name = readLine.question("Enter character name:");
    console.log("Rolling Str");
    character.strength = rollStat(diceRolled);
    console.log("Rolling Dex");
    character.dex = rollStat(diceRolled);
    console.log("Rolling CON");
    character.con = rollStat(diceRolled);
    console.log("Rolling INT");
    character.int = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wis = rollStat(diceRolled);
    console.log("Rollin CHA");
    character.cha = rollStat(diceRolled);
    displayChar(character);
}

function displayChar(char){
    console.log('----------------');
    console.log(`Name: ${char.name}`);

    console.log(`STR: ${char.strength}`);

    console.log(`Name: ${char.dexterity}`);

    console.log(`Name: ${char.constitution}`);

    console.log(`Name: ${char.intellegence}`);

    console.log(`Name: ${char.wisdom}`);

    console.log(`Name: ${char.charisma}`);

}

