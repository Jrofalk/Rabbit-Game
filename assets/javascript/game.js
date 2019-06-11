$(document).ready(function() {

  //Generates random target number to be displayed
  var randomTarget = Math.floor(Math.random() * 102) + 19;
  $('#target-number').html('<h1>Target</h1> ' + randomTarget);
  //Generates random value for each rabbit
  var rabbitOne = Math.floor(Math.random() * 12) + 1;
  var rabbitTwo = Math.floor(Math.random() * 12) + 1;
  var rabbitThree = Math.floor(Math.random() * 12) + 1;
  var rabbitFour = Math.floor(Math.random() * 12) + 1;
  //Variables for score, wins, and losses
  var score = 0;
  var wins = 0;
  var losses = 0;
  //Function to reset game
  function restart(){
    randomTarget = Math.floor(Math.random() * 102) + 19;
    $('#target-number').html('<h1>Target</h1> ' + randomTarget);
    rabbitOne = Math.floor(Math.random() * 12) + 1;
    rabbitTwo = Math.floor(Math.random() * 12) + 1;
    rabbitThree = Math.floor(Math.random() * 12) + 1;
    rabbitFour = Math.floor(Math.random() * 12) + 1;
    score = 0;
    $('#score').text(score);
  }
  //Funtion to record wins
  function win(){
    wins++;
    $('#total-wins').text(wins);
    restart();
  }
  //Function to record losses
  function loss(){
    losses++;
    $('#total-losses').text(losses);
    restart();
  }

  //Allows rabbit images to be clicked and updates values
  $('#button-one').on ('click', function(){
    score = score + rabbitOne;
    $('#score').text(score); 
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-two').on ('click', function(){
    score = score + rabbitTwo;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-three').on ('click', function(){
    score = score + rabbitThree;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-four').on ('click', function(){
    score = score + rabbitFour;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })
  //Displays and hides instructions
  $('#dropdownMenu1').on('click', function(){
      $('#hidden').toggle();
  });


});

