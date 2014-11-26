$(document).ready(function(){
  var Ming = new Player ('Ming');
  var Shan = new Player ('Shan');
  var game = new Game (Shan, Ming);
  $('.choices img').on('click', function(){
  	Ming.picks($(this).data('pick'));
  	console.log($(this).data('pick'));
  	Shan.picks('lizard');
    $('#results').prepend('<li>' + game.winningMessage() + '</li>' );
  });
})