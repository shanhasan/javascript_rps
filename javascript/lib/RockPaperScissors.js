function Player(name){
	this.name = name;
};

Player.prototype.picks = function() {
	// body...
};

function Game(){

};

Game.prototype.winner = function() {
  return this.player1;
};

