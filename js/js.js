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

// if((event.target).hasClass("O") || (event.target).hasClass("X")){
//   $(this).text("");
//   clickCount = clickCount - 1;
//   console.log(clickCount);
// }



//user logic

$(document).ready(function() {

  $('div.boardSpace').click(function() {
    $('h2.playerTurn').toggleClass('hidden');
    clickCount = clickCount + 1;


   });

  $('div.boardSpace').click(function(event){
    console.log(event.target);

   if (clickCount%2 === 0){
      $(event.target).text(playerTwoSelect);
        // $(event.target).addClass("O");
        console.log(clickCount);
        console.log(event.target);
    }
   if (clickCount%2 !== 0){
      $(event.target).text(playerOneSelect);
        // $(event.target).addClass("X");
        console.log(clickCount);
        console.log(event.target);
    }

  });

});
