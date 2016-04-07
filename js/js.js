//business logic stuff

function Game(){
  this.player = "X";
  this.space = [["","",""], ["","",""], ["","",""]];

  this.nextPlayer = function(){
    if(this.player === "X"){
      this.player = "O";
    } else { this.player = "X"; }
  }
  this.setSpace = function(row, col){
    if(!this.space[row][col]){
      this.space[row][col] = this.player;
      return true;
    } else { return false; }
  }

}


function Start() {
  var newGame = new Game();
  $('.boardSpace').text('');
}


//user logic

$(document).ready(function() {

  var newGame = new Game();

  $('div.boardSpace').click(function() {
    $('h2.playerTurn').toggleClass('hidden');

   });

  $('div.boardSpace').click(function(event){

    if (newGame.setSpace(parseInt($(this).parent().attr('id')), parseInt($(this).attr('value')))) {
      $(this).text(newGame.player);
      $(event.target).addClass('active');
      newGame.nextPlayer();
      console.log(newGame.space[0]);
      console.log(newGame.space[1]);
      console.log(newGame.space[2]);
    }

  });

});
