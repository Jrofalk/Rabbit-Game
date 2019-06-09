//Everything happens inside of here, waits until document loads
$(document).ready(function() {

  //Generates random target number to be displayed
  var randomTarget = Math.floor(Math.random() * 102) + 19;
  $('#target-number').html('<h1>Random Number:</h1> ' + randomTarget);

  //Generates random number for each crystal. You need to change these to add given number to what is displayed in score, not just replace it.
  var crystalOne = Math.floor(Math.random() * 12) + 1;
    $('#button-one').on('click', function() {
      $('#score').html(crystalOne);
    });

  var crystalTwo = Math.floor(Math.random() * 12) + 1;
    $('#button-two').on('click', function() {
      $('#score').html(crystalTwo);
    });
        
  var crystalThree = Math.floor(Math.random() * 12) + 1;
    $('#button-three').on('click', function() {
      $('#score').html(crystalThree);
    });

    var crystalFour = Math.floor(Math.random() * 12) + 1;
    $('#button-four').on('click', function() {
      $('#score').html(crystalFour);
    });
        


  
















});