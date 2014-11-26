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

    $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn();
    $('li:nth-child(5)').fadeOut(3000, function(){
      $(this).remove();
      })
    $('#results').append('<li>' + game.winningMessage() + '</li>');
  });
})