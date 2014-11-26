$(document).ready(function(){
  var Ming = new Player ('Ming');
  var Shan = new Player ('Shan');
  var game = new Game (Shan, Ming);
  $('.choices img').on('click', function(){
    Ming.picks('lizard');
    Shan.picks('paper');
    $('#results').html(game.winningMessage());
  });
})