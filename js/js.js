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
        var column = column + this.space[i][k];
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
      console.log(this.space.join(""));
      return catsGame = true;
    }
  }
}

//user logic

$(document).ready(function() {
console.log("player1Wins " + player1Wins);
console.log("player2Wins " + player2Wins);


  var newGame = new Game();

  $('div.boardSpace').click(function() {
    $('h2.playerTurn').toggleClass('hidden2');

   });

  $('div.boardSpace').click(function(event){

    if (newGame.setSpace(parseInt($(this).parent().attr('id')), parseInt($(this).attr('value')))) {
      $(event.target).text(newGame.player);
      $(event.target).addClass('active');
      newGame.nextPlayer();
    }
  });
  $('div.boardSpace').click(function(event){

    console.log(player1Wins);
    console.log("string")
    // console.log(player2Wins);
    // console.log(catsGame);
    newGame.winCheck();
    if (player1Wins === true){
      $('.boardSpace').text('X');
      $('h1#winner1').toggleClass('hidden2');
      $('div#winnerBox').toggleClass('hidden2');
        debugger;
    }
    if (player2Wins === true){
      $('.boardSpace').text('O');
      $('h1#winner2').toggleClass('hidden2');
      $('div#winnerBox').toggleClass('hidden2');
    }
    if (catsGame === true){
      $('.boardSpace').text('');
      $('h1#noWinner').toggleClass('hidden2');
      $('div#winnerBox').toggleClass('hidden2');
    }

    });
    $('button#reset').click(function() {

        $('div.boardSpace').text('');
        $('h1#noWinner').addClass('hidden2');
        $('h1#winner1').addClass('hidden2');
        $('h1#winner2').addClass('hidden2');
        $('div#winnerBox').addClass('hidden2');

        player1Wins = false;
        player2Wins = false;
        catsGame = false;
        newGame.space = [["","",""], ["","",""], ["","",""]]
    });
  });
