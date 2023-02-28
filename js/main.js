  /*----- constants -----*/
const squareDisplay = {
  empty: 'white',
  1: 'red',
  "-1": "green"
}

//an object that shows who "owns" each square
const squares = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
}

  /*----- state variables -----*/
let turn;
let outcome;

  /*----- cached elements  -----*/
let boardArr = document.querySelectorAll('.square');
let msg = document.querySelector('#outcome-msg');
let turnEl = document.querySelector('#turn-display');
let resetEl = document.querySelector('#reset');


  /*----- event listeners -----*/
function sqClicked(evt){
  let currentSquare = evt.target.getAttribute('id');

  //kicks us out if this square has already been clicked
  if (squares[currentSquare] !=  null) return;
  if (outcome != null) return;

  //gives ownership of the square to the player who's turn it is
  squares[currentSquare] = turn;
  boardArr[currentSquare].style.backgroundColor = squareDisplay[turn];


  checkWinner()

  turn*=-1;
  //console.log(squareDisplay.turn);
  //console.log(boardArr[currentSquare]);
  //console.log(squares[currentSquare]);
  
  render();


}

boardArr.forEach(function(sq){
      sq.addEventListener('click', sqClicked);
});

resetEl.addEventListener('click', function(){
  init()
});

  /*----- functions -----*/
function init(){
  turn = 1;
  outcome = null;

  //clears the squares object so each square is owned by no one
  Object.keys(squares).forEach(function(key){ squares[key] = null });

  //iterating thru the squares and setting the color to empty
  boardArr.forEach(function(unit){
    unit.style.backgroundColor = squareDisplay.empty;
  });

  render();
}

function render(){
  //check if the game is in progress and it has ended, send a message to the user
  renderOutcomeTxt();
  renderTurn();
}

function renderTurn(){
  let currentTurn = squareDisplay[turn];
  turnEl.textContent = currentTurn;
  turnEl.style.color = currentTurn;
}

function renderOutcomeTxt(){
  if(outcome != null){
    if(outcome == "1"){
      msg.textContent = "RED Wins!";
    } else if (outcome == "-1"){
      msg.textContent = "GREEN wins!";
    } else {
      msg.textContent = "Woah! it's a draw!";
    }
  } else msg.textContent = "";
  //clears the text on reset
}

//takes in any number of arguments - checks if any value is null and returns false, otherwise checks if all arguments are equal
function areEqual(){
  for (var i = 1; i< arguments.length; i++){
     if (arguments[i] === null || arguments[i] !== arguments[i-1])
        return false;
  }
  return true;
}

//check for one of 8 winnning conditions
function checkWinner(){
  let squaresLeft = Object.values(squares).includes(null);
  if (areEqual(squares[0],squares[1],squares[2])){
    outcome =  squares[0];
    render();
  } else if(areEqual(squares[3],squares[4],squares[5])){
    outcome = squares[3];
    render();
  } else if(areEqual(squares[6],squares[7],squares[8])){
    outcome = squares[6];
    render();
  } else if(areEqual(squares[0],squares[3],squares[6])){
    outcome = squares[0];
    render();
  } else if(areEqual(squares[1],squares[4],squares[7])){
    outcome = squares[1];
    render();
  } else if(areEqual(squares[2],squares[5],squares[8])){
    outcome = squares[2];
    render();
  } else if(areEqual(squares[0],squares[4],squares[8])){
    outcome = squares[0];
    render();
  } else if(areEqual(squares[2], squares[4], squares[6])){
    outcome = squares[2];
    render();
  } else if(!squaresLeft){
    outcome = "t";
    render();
  }

}

init();