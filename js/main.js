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

  squares[currentSquare] = turn;
  boardArr[currentSquare].style.backgroundColor = squareDisplay[turn];
  turn*= -1;
  console.log(squareDisplay.turn);
  console.log(boardArr[currentSquare]);
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
    } else if (outcome == "2"){
      msg.textContent = "GREEN wins!";
    } else {
      msg.textContent = "Woah! it's a draw!";
    }
  }
}

  //console.log(boardArr);
  boardArr[8].textContent = "heyo";


init();