$(document).ready(function(){
  var Ming = new Player ('Ming');
  var Shan = new Player ('Shan');
  var game = new Game (Shan, Ming);
  $('.choices img').on('click', function(){
  	Ming.picks($(this).data('pick'));

		var array = [];
		$('.choices img').each(function() {
			array.push($(this).data('pick'));
		});
		Shan.picks(array[Math.floor(Math.random() * array.length)]);

    $('#results').append('<li>' + game.winningMessage() + '</li>');
  });
})