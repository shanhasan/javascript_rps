$(document).ready(function(){
  var Shan = new Player ('Shan');
  var Computer = new Player ('Computer');
  var game = new Game (Shan, Computer);
  var history = new Array();
  var arrayOfChoices = [];
<<<<<<< HEAD

  $('.choices img').each(function() {
    arrayOfChoices.push($(this).data('pick'));
  });

  $('.choices img').on('click', function(){
    Shan.picks($(this).data('pick'));


      if (history.length == 0){
        
        Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);
      
      } else {

        var computerChooses = [];
        computerChooses = arrayOfChoices.slice();

        var lastSelection = history[history.length -1];
        var lastSelectionIndex = computerChooses.indexOf(lastSelection);

        computerChooses.splice(lastSelectionIndex, 1);

        var rightObject = game.PAIRS

        console.log(computerChooses);

        console.log(game.PAIRS[lastSelection]);
        
        var justChecking = game.PAIRS[game.PAIRS.length -1];


        console.log(this.justChecking);


      };

      
        $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn();
        $('li:nth-child(5)').fadeOut(1000, function(){
          $(this).remove();
          })
        $('#results').append('<li>' + game.winningMessage() + '</li>');
        
        history.push(Shan.pick);

        if (history.length > 10){
          history.shift();      
        };



    //console.log(history.join(" "));
    // console.log(game.PAIRS);

  });
})
      // arrayOfChoices.splice(lastSelection);

      // arrayOfChoices.remove(game.PAIRS[lastSelection][1]);

      // arrayOfChoices.remove(game.PAIRS[lastSelection][3]);

      // Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);

      // Computer.picks(lastSelection);

      // Computer.picks(history.pop());
      // console.log(history);
=======
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
>>>>>>> cc4c88d7ad4824d15c92e352aade239464def65f
