$(document).ready(function(){
  var you = new Player ('you');
  var Computer = new Player ('Computer');
  var game = new Game (you, Computer);
  var history = new Array();
  var arrayOfChoices = [];
  var computerChooses = [];
  var lastSelectionIndex;

   $('#maggie').hover(function(){
   	$(this).attr('src','images/maggie_hover.png');
   		}, function() {
   			$(this).attr('src','images/maggie.png');
   });

   $('#lisa').hover(function(){
    $(this).attr('src','images/lisa_hover.png');
      }, function() {
        $(this).attr('src','images/lisa.png');
   });

   $('#marge').hover(function(){
    $(this).attr('src','images/marge_hover.png');
      }, function() {
        $(this).attr('src','images/marge.png');
   });

   $('#bart').hover(function(){
    $(this).attr('src','images/bart_hover.png');
      }, function() {
        $(this).attr('src','images/bart.png');
   });

   $('#homer').hover(function(){
    $(this).attr('src','images/homer_hover.png');
      }, function() {
        $(this).attr('src','images/homer.png');
   });

  $('.choices img').each(function() {
  	arrayOfChoices.push($(this).data('pick'));
  });

  $('.choices img').on('click', function(){
  	you.picks($(this).data('pick'));

	if (history.length == 0){

		Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);

	} else {
		computerChooses.length = 0;
		computerChooses = arrayOfChoices.slice();
		var lastSelection = history[history.length -1];
		
		removeItemFromArray(lastSelection);
		removeItemFromArray(Object.keys(game.PAIRS[lastSelection])[0]);
		removeItemFromArray(Object.keys(game.PAIRS[lastSelection])[1]);

		Computer.picks(computerChooses[Math.floor(Math.random() * computerChooses.length)]);

		var frequency = {};

		history.forEach(function(element){
			frequency[element] === undefined ? frequency[element] = 1 : frequency[element]++;
			console.log(frequency);
		});

		var keysAndValues = [];

		for(var key in frequency){
			keysAndValues.push(key, frequency[key])
		}

		var values = [];
		var maxValue;

		for(var key in frequency){
			values.push(frequency[key])
		}

		maxValue = Math.max.apply(Math, values);

		console.log(maxValue);

		for(var key in frequency){
			if (frequency[key] === maxValue) {
				console.log(key);
			}
		}

    };

    $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn();
    $('li:nth-child(5)').fadeOut(1000, function(){
      $(this).remove();
      })
    $('#results').append('<li>' + game.winningMessage() + '</li>');
		
		history.push(you.pick);

		if (history.length > 10){
			history.shift();			
		};
	});

  	removeItemFromArray = function(lastSelection){
		lastSelectionIndex = computerChooses.indexOf(lastSelection);
		computerChooses.splice(lastSelectionIndex, 1);
	};

});
