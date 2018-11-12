//global variables
// wins, losses, targetScore, userScore
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = randomValue(120, 19);
var winMessage = "You Win!"
var loseMessage = "You Lose!"

$("#target-number").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);
// $("#counter").text(counter);


var imageArray = ["assets/images/fire.png",
"assets/images/water.png",
"assets/images/air.png",
"assets/images/earth.png"];

//function that could take in two ints and pass these to our math.random

function randomValue(max, min) {
  return Math.floor((Math.random() * (max - min)+1));
};

function reset() {
    counter = 0;
    // var targetNumber = randomValue(120,19);
    // for (var i = 0; i < imageArray.length; i++) {
    // imageElement.attr("data-elementvalue", randomValue(12, 1));
    // };

};

for (var i = 0; i < imageArray.length; i++) {
    
    var imageElement = $("<img>");
    
    imageElement.addClass("element-image");
    imageElement.attr("src", imageArray[i]);
    imageElement.attr("data-elementvalue", randomValue(12, 1));
    $("#elements").append(imageElement);
    console.log($(imageElement).attr("data-elementvalue"));
    
};

$(".element-image").on("click", function() {
    var elementValue = ($(this).attr("data-elementvalue"));
    elementValue = parseInt(elementValue);
    
    counter += elementValue;
    // alert("New Score: " + counter);
    $("#counter").text(counter);

    if (counter === targetNumber) {
        wins++;
        $("#game-message").text(winMessage);
        reset();
        // alert("you win");
    } else if (counter >= targetNumber) {
        losses++;
        $("#game-message").text(loseMessage);
        reset();
        // alert("you lose");
    }
});




//function 1
// array of image sources to be able to loop
// set goalNumber with math.random

//loop through images array
    //for every index, create image on screen
    //add class
    //add source
    //add crystal value as attribute
    //append image to screen

    // function displayCrystals() {
    //     var array = [src="assets", img2, img3, img4]
    //     for (var i=0; i<array.length; i++) {
    //         var div = $("<div>");
    //         div.addClass('crystal')
    //         div.attr('crysalVal', math.random)
    //         $('crystal-images').append(div);
    //     }
    // }
    // makeDivs()


//create click event on crystals
    //use $(this) to capture attribute
    //add clicked value to user score

//create conditions to check for win or loss using if statements
//if win or loss, restart game and increment wins/losses


//global variables

//functions

//main process



