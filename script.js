// Dice Roller
// Braydon Kermes

const currentDice = document.getElementById("enabledDice");
const diceList = document.querySelectorAll(".dice");
const currentRoll = document.getElementById("diceRolled");


// Set default dice to first (d20)
currentDice.src = diceList[0].src;
currentDice.dataset.type = diceList[0].dataset.type;
currentDice.alt = diceList[0].alt;


// Dice Changer
function diceSelect(event){
    currentDice.src = event.target.src;                     // Image of dice
    currentDice.dataset.type = event.target.dataset.type;   // data-type: "d20"
    currentDice.alt = event.target.alt;                     // alt type: "d20"
    currentRoll.innerHTML = "--";
}

for(let i = 0; i < diceList.length; i++){
    diceList[i].addEventListener("click", diceSelect);
}


// Dice roll number generator
function rollType(){
    let diceTotal = 0;

    if(!currentDice.dataset.type){
        alert("Select Dice First");
        return;
    }

    if(currentDice.dataset.type === "d20"){
        diceTotal += Math.floor(Math.random() * 20) + 1;
    }

    if(currentDice.dataset.type === "d12"){
        diceTotal += Math.floor(Math.random() * 12) + 1;
    }

    if(currentDice.dataset.type === "d8"){
        diceTotal += Math.floor(Math.random() * 8) + 1;
    }

    if(currentDice.dataset.type === "d6"){
        diceTotal += Math.floor(Math.random() * 6) + 1;
    }

    if(currentDice.dataset.type === "d4"){
        diceTotal += Math.floor(Math.random() * 4) + 1;
    }
    currentRoll.innerHTML = diceTotal;
}
currentDice.addEventListener("click", rollType);


// Add Modifier to total dice roll
const modifierList = document.querySelectorAll(".button")

for(let i = 0; i < modifierList.length; i++){
    modifierList[i].addEventListener("click", function() {
        if(currentRoll.innerHTML != "--"){
            currentRoll.innerHTML = Number(currentRoll.innerHTML) + (i + 1);
        }
    });
}




// TO-DO: Add Dice Animation
