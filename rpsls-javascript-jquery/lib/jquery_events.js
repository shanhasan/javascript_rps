$(document).ready(function(){
  var Shan = new Player ('Shan');
  var Computer = new Player ('Computer');
  var game = new Game (Shan, Computer);
  var history = new Array();

  $('.choices img').on('click', function(){
  	Shan.picks($(this).data('pick'));

		var arrayOfChoices = [];
		$('.choices img').each(function() {
			arrayOfChoices.push($(this).data('pick'));
		});
		Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);

    $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn();
    $('li:nth-child(5)').fadeOut(1000, function(){
      $(this).remove();
      })
    $('#results').append('<li>' + game.winningMessage() + '</li>');

  	// $('li').each(function() {
		// 	history.push($(this).text());
		// });
		
		history.push(Shan.pick);

		if (history.length > 10){
			history.shift();			
		};

		console.log(history.join(" "));

	});
})