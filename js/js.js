//business logic
function Game(){
  this.player = "X";
  this.space = [["","",""]["","",""]["","",""]];

  this.nextPlayer = function(){
    if(this.player === "X"){
      this.player = "O";
    } else { this.player = "X"; }
  }
  this.setSpace = function(('div#1A'),('div#1B'),('div#1C'),('div#2A'),('div#2B'),('div#2C'),('div#3A'),('div#3B'),('div#3C')){

  }
}


function Start() {
  newGame = new Game();
  $('.boardSpace').text('');
}


var playerOneSelect = "X";
var playerTwoSelect = "O";
var clickCount = 0;








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

    if (newGame.setSpace(parseInt($(this).parent().attr('id')), parseInt($(this).attr('value')))) {
      $(event.target).addClass('active');
      newGame.nextPlayer();
    }

   if (clickCount%2 === 0){
      $(event.target).text(playerTwoSelect);
        //$(event.target).addClass("O");
        console.log(clickCount);
        console.log(event.target);
    }
   if (clickCount%2 !== 0){
      $(event.target).text(playerOneSelect);
        //$(event.target).addClass("X");
        console.log(clickCount);
        console.log(event.target);
    }

  });

});
