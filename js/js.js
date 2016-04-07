//business logic stuff
var player1Wins = false;
var player2Wins = false;
var catsGame = false;
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
function Start() {
  var newGame = new Game();
  $('.boardSpace').text('');
}

this.winCheck = function(){
  for (var i=0; i<this.space[0].length; i++){
      if (this.space[i].join("") === "XXX"){
        return player1Wins = true;
      } else if (this.space[i].join("") === "OOO"){
        return player2Wins = true;
      }
    }
    for (var k = 0; k < this.space[0].length; k++) {
      var column = "";
      for (var i=0; i<this.space.length; i++){
        column = column + this.space[i][k];
      }
      if (column === "XXX"){
        return player1Wins = true;
      } else if (column === "OOO"){
        return player2Wins = true;
      }
    }
    if (this.space[1][1] && ( (this.space[0][0] === this.space[1][1] && this.space[1][1] === this.space[2][2]) || (this.space[0][2] === this.space[1][1] && this.space[1][1] === this.space[2][0]))) {
      console.log(this.space[1][1]);
      if (this.space[1][1] === "X"){
        return player1Wins = true;
      } else if (this.space[1][1] === "O"){
        return player2Wins = true;
      }
    }
    if (this.space.join("").length === 15){
      console.log(this.space.join(""))
      return catsGame = true;
    }
  }
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
  $('div.boardSpace').click(function(event){
    newGame.winCheck();
    if (player1Wins === true){
      $('.boardSpace').text('X');
      $('h1#winner1').toggleClass('hidden');
      $('div#winnerBox').toggleClass('hidden');
    }
    if (player2Wins === true){
      $('.boardSpace').text('O');
      $('h1#winner2').toggleClass('hidden');
      $('div#winnerBox').toggleClass('hidden');
    }
    if (catsGame === true){
      $('.boardSpace').text('');
      $('h1#noWinner').toggleClass('hidden');
      $('div#winnerBox').toggleClass('hidden');
    }

  });
});
