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
<<<<<<< HEAD
		history.forEach(function(element){
			frequency[element] === undefined ? frequency[element] = 1 : frequency[element]++;
			console.log(frequency);
		});

    // var keys = Object.keys(frequency);

    var keys = frequency; 
    keys = $.map(frequency, function (value) {
      

      // keys.push(key);
      // keys.push(value);
      return value;
    });
=======
>>>>>>> c4e1b9f25b4f9a4a89d041de723af16f0d36a34f

    var x = [1,2,3,2,5,7];
    var largest = Math.max.apply(Math, x);
    return largest
    };


    console.log(x);


<<<<<<< HEAD
=======
			// console.log(frequency);
		});
>>>>>>> c4e1b9f25b4f9a4a89d041de723af16f0d36a34f

		var keysAndValues = [];

		for(var key in frequency){
			keysAndValues.push(key, frequency[key])
		}

		console.log(keysAndValues);

		$(frequency).sort(function (a, b){
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			//a must be equal to b
			return 0;
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
