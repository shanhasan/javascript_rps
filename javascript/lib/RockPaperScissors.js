function Player(name){
	this.name = name;
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
};

function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function(player1, player2) {
  
  var {'rock' : 'scissors', 'paper' : 'rock', 'scissors' : 'paper'};

  if (player1.pick == player2.pick){
    return null;
  };

};

