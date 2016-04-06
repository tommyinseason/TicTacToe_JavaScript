//business logic

var boardArray = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'];
var playerOneSelect = "X";
var playerTwoSelect = "O";
var clickCount = 0;



function Players(player1, player2){
  this.player1 = X;
  this.player2 = O;
}
// function board(row1, row2, row3)
//   this.row1 = boardArray.slice(0, 2);
//   this.row2 = boardArray.slice(3, 5);
//   this.row3 = boardArray.slice(6, 8);

function Spaces(AA, AB, AC, BA, BB, BC, CA, CB, CC){
  this.AA = topLeft;
  this.AB = topCenter;
  this.AC = topRight;
  this.BA = middleLeft;
  this.BB = middleCenter;
  this.BC = middleRight;
  this.CA = bottomLeft;
  this.CB = bottomCenter;
  this.CC = bottomRight;
}

// Players.prototype.activePlayer = function(){
//
// }


//user logic

$(document).ready(function() {

  $('div.boardSpace').click(function() {
    $('h2#playerOne').toggleClass('hidden');
    $('h2#playerTwo').toggleClass('hidden');
    clickCount = clickCount + 1;
    console.log(clickCount);

   });
  $('div.boardSpace').click(function(){
    if (clickCount%2 === 0){
      $('span#span1A').text(playerTwoSelect);
    }
    else {
      $('span#span1A').text(playerOneSelect);
    }
  });

});
