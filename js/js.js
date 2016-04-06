//business logic
function game (players, spaces, scoring){
  this.players = [];
  this.spaces = theSpaces;
  this.scoring = the;
}

function Players(player1, player2){
  this.player1 = X;
  this.player2 = O;
}


var boardArray = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'];
var playerOneSelect = "X";
var playerTwoSelect = "O";
var clickCount = 0;


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


//user logic

$(document).ready(function() {

  $('div.boardSpace').click(function() {
    $('h2#playerOne').toggleClass('hidden');
    $('h2#playerTwo').toggleClass('hidden');
    clickCount = clickCount + 1;
    console.log(clickCount);

   });
  $('div.boardSpace').click(function(event){
    if (clickCount%2 === 0){
      $(event.target).text(playerTwoSelect);
    }
    else {
      $(event.target).text(playerOneSelect);
    }
  });

});
