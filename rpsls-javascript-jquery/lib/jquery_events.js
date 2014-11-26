$(document).ready(function(){
  var Shan = new Player ('Shan');
  var Computer = new Player ('Computer');
  var game = new Game (Shan, Computer);
  var history = new Array();
  var arrayOfChoices = [];

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

        console.log(computerChooses);

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
   });
})

    //console.log(history.join(" "));
    // console.log(game.PAIRS);

      // arrayOfChoices.splice(lastSelection);

      // arrayOfChoices.remove(game.PAIRS[lastSelection][1]);

      // arrayOfChoices.remove(game.PAIRS[lastSelection][3]);

      // Computer.picks(arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)]);

      // Computer.picks(lastSelection);

      // Computer.picks(history.pop());
      // console.log(history);