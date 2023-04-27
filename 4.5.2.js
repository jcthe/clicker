const readLine = require('readline-sync');

let diceRolled =[];
let character1 ={
    //empty to start
};

let character2 ={

};

let character3 ={

};



createChar(character1, diceRolled);
createChar(character2, diceRolled);
createChar(character3, diceRolled);




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

function createChar(character1, list) {
    character1.name = readLine.question("Enter character name:");
    console.log("Rolling Str");
    character1.strength = rollStat(diceRolled);
    console.log("Rolling Dex");
    character1.dex = rollStat(diceRolled);
    console.log("Rolling CON");
    character1.con = rollStat(diceRolled);
    console.log("Rolling INT");
    character1.int = rollStat(diceRolled);
    console.log("Rolling WIS");
    character1.wis = rollStat(diceRolled);
    console.log("Rollin CHA");
    character1.cha = rollStat(diceRolled);
    displayChar(character1);
}



function createChar(character2, list) {
    character2.name = readLine.question("Enter character2 name:");
    console.log("Rolling Str");
    character2.strength = rollStat(diceRolled);
    console.log("Rolling Dex");
    character2.dex = rollStat(diceRolled);
    console.log("Rolling CON");
    character2.con = rollStat(diceRolled);
    console.log("Rolling INT");
    character2.int = rollStat(diceRolled);
    console.log("Rolling WIS");
    character2.wis = rollStat(diceRolled);
    console.log("Rollin CHA");
    character2.cha = rollStat(diceRolled);
    displayChar(character2);
}
function createChar(character3, list) {
    character3.name = readLine.question("Enter character name:");
    console.log("Rolling Str");
    character3.strength = rollStat(diceRolled);
    console.log("Rolling Dex");
    character3.dex = rollStat(diceRolled);
    console.log("Rolling CON");
    character3.con = rollStat(diceRolled);
    console.log("Rolling INT");
    character3.int = rollStat(diceRolled);
    console.log("Rolling WIS");
    character3.wis = rollStat(diceRolled);
    console.log("Rollin CHA");
    character3.cha = rollStat(diceRolled);
    displayChar(character3);
}


function displayChar(char){
    console.log('----------------');
    console.log(`Name: ${char.name}`);

    console.log(`STR: ${char.strength}`);

    console.log(`Con: ${char.constitution}`);

    console.log(`DEX: ${char.dextreity}`);

    console.log(`INT: ${char.intellegence}`);

    console.log(`WIS: ${char.wisdom}`);

    console.log(`CHA: ${char.charisma}`);

}