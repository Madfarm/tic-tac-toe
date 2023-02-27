  /*----- constants -----*/
const squareDisplay = {
  empty: 'white',
  p1: 'red',
  p2: "green",
}

  /*----- state variables -----*/
let turn;
let outcome;

  /*----- cached elements  -----*/
let boardArr = document.querySelectorAll('.square');
let msg = document.querySelector('#outcome-msg');


  /*----- event listeners -----*/
function sqClicked(evt){
  


}

boardArr.forEach(function(sq){
      sq.addEventListener('click', sqClicked);
});

  /*----- functions -----*/
function init(){
  turn = "1";
  outcome = null;
  //iterating thru the squares and setting the color to empty
  boardArr.forEach(function(unit){
    console.log(unit);
    unit.style.backgroundColor = squareDisplay.empty;
  });

  render();
}

function render(){
  //check if the game is in progress and it has ended, send a message to the user
  if(outcome != null){
    if(outcome == "1"){
      msg.textContent = "RED Wins!";
    } else if (outcome == "2"){
      msg.textContent = "GREEN wins!";
    } else {
      msg.textContent = "Woah! it's a draw!";
    }
  }
}

  console.log(boardArr);
  boardArr[8].textContent = "heyo";


init();