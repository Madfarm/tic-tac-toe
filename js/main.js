  /*----- constants -----*/
const squareDisplay = {
  empty: 'white',
  1: 'red',
  "-1": "green"
}

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


  /*----- event listeners -----*/
function sqClicked(evt){
  let currentSquare = evt.target.getAttribute('id');

  //kicks us out if this square has already been clicked
  if (squares[currentSquare] !=  null) return;
  if (outcome != null) return;

  squares[currentSquare] = turn;
  boardArr[currentSquare].style.backgroundColor = squareDisplay[turn];


  checkWinner()

  turn*=-1;
  //console.log(squareDisplay.turn);
  //console.log(boardArr[currentSquare]);
  //console.log(squares[currentSquare]);
  


}

boardArr.forEach(function(sq){
      sq.addEventListener('click', sqClicked);
});

  /*----- functions -----*/
function init(){
  turn = 1;
  outcome = null;
  //iterating thru the squares and setting the color to empty
  boardArr.forEach(function(unit){
    //console.log(unit);
    unit.style.backgroundColor = squareDisplay.empty;
  });

  render();
}

function render(){
  //check if the game is in progress and it has ended, send a message to the user
  if(outcome != null){
    if(outcome == "1"){
      msg.textContent = "RED Wins!";
    } else if (outcome == "-1"){
      msg.textContent = "GREEN wins!";
    } else {
      msg.textContent = "Woah! it's a draw!";
    }
  }
}

//takes in any number of arguments - checks if any value is null and returns false otherwise checks if arguments are equal
function areEqual(){
  for (var i = 1; i< arguments.length; i++){
     if (arguments[i] === null || arguments[i] !== arguments[i-1])
        return false;
  }
  return true;
}

//check for one of 8 winnning conditions
function checkWinner(){
  if (areEqual(squares[0],squares[1],squares[2])){

  } else if(){

  } else if(){

  } else if(){

  } else if(){

  } else if(){

  } else if(){

  } else if(){

  }

}

  //console.log(boardArr);
  //boardArr[8].textContent = "heyo";


init();