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

Game.prototype.RULES = {
  rock: {scissors: "crushes", lizard: "squashes"},
  paper: {rock: "covers", spock: "disproves"},
  scissors: {paper: "cut", lizard: "decapitate"},
  lizard: {spock: "poisons", paper: "eats"},
  spock: {scissors: "smashes", rock: "vaporises"}
};

Game.prototype.winner = function() {

<<<<<<< HEAD
console.log(Object.keys(this.RULES[this.player1.pick])[0]);

=======
>>>>>>> 8fc25995608259e5c40440e58eba52c5edb63888
  if (this.player1.pick === this.player2.pick){
    return null;
  } else if (this.RULES[this.player1.pick][this.player2.pick]){
  	return this.player1
  } else {
  	return this.player2
  }  
};
