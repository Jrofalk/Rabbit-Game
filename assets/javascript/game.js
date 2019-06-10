$(document).ready(function() {

//Generates random target number to be displayed
  var randomTarget = Math.floor(Math.random() * 102) + 19;
  $('#target-number').html('<h1>Random Number:</h1> ' + randomTarget);

  var crystalOne = Math.floor(Math.random() * 12) + 1;
  var crystalTwo = Math.floor(Math.random() * 12) + 1;
  var crystalThree = Math.floor(Math.random() * 12) + 1;
  var crystalFour = Math.floor(Math.random() * 12) + 1;

  var score = 0;
  var wins = 0;
  var losses = 0;

  function restart(){
    randomTarget = Math.floor(Math.random() * 102) + 19;
    $('#target-number').html('<h1>Random Number:</h1> ' + randomTarget);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    score = 0;
    $('#score').text(score);
  }

  function win(){
    wins++;
    $('#total-wins').text(wins);
    restart();
  }

  function loss(){
    losses++;
    $('#total-losses').text(losses);
    restart();
  }


  $('#button-one').on ('click', function(){
    score = score + crystalOne;
    $('#score').text(score); 
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-two').on ('click', function(){
    score = score + crystalTwo;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-three').on ('click', function(){
    score = score + crystalThree;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })

  $('#button-four').on ('click', function(){
    score = score + crystalFour;
    $('#score').text(score);
      if(score === randomTarget){
        win();
      }
      else if(score > randomTarget){
        loss();
      }
  })




});

