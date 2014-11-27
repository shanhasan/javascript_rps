$(document).ready(function(){
  var Shan = new Player ('Shan');
  var Computer = new Player ('Computer');
  var game = new Game (Shan, Computer);
  var history = new Array();
  var arrayOfChoices = [];
  var computerChooses = [];
  var lastSelectionIndex;

  $('.choices img').each(function() {
  	arrayOfChoices.push($(this).data('pick'));
  });

  $('.choices img').on('click', function(){
  	Shan.picks($(this).data('pick'));

	if (history.length == 0){

		Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);

	} else {
		computerChooses.length = 0;
		computerChooses = arrayOfChoices.slice();
		var lastSelection = history[history.length -1];
		// lastSelectionIndex = computerChooses.indexOf(lastSelection);
		// computerChooses.splice(lastSelectionIndex, 1);

		removeItemFromArray(lastSelection);
		removeItemFromArray(Object.keys(game.PAIRS[lastSelection])[0]);
		removeItemFromArray(Object.keys(game.PAIRS[lastSelection])[1]);

		Computer.picks(computerChooses[Math.floor(Math.random() * computerChooses.length)]);

		console.log("Player 1 -> " + game.player1.pick + " & Computer -> " + game.player2.pick);
		console.log(Object.keys(game.PAIRS[lastSelection])[0]);
		console.log(Object.keys(game.PAIRS[lastSelection])[1]);
		console.log("Computer then -> " + computerChooses);
		console.log("++++++++++++++++++++++++++++++");




		var frequency = {};

		history.forEach(function(element){

			frequency[element] === undefined ? frequency[element] = 1 : frequency[element]++;

			console.log(frequency);
		});

	};

		
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
	});

  	removeItemFromArray = function(lastSelection){
		lastSelectionIndex = computerChooses.indexOf(lastSelection);
		computerChooses.splice(lastSelectionIndex, 1);
	};

});
