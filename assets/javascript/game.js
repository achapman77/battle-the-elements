//global variables
// wins, losses, targetScore, userScore
var wins = 0;
var losses = 0;

var targetNumber = 50;

$("#target-number").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);


var counter = 0;


var numberOptions = [10, 11, 5, 7];
var increment = numberOptions[Math.round(Math.random())];

for (var i = 0; i < numberOptions.length; i++) {

    var imageElement = $("<img>");
    
    imageElement.addClass("element-image");
    imageElement.attr("src", "assets/images/fire.png");
    imageElement.attr("data-elementvalue", numberOptions[i]);
    $("#elements").append(imageElement);
};




$(".element-image").on("click", function() {
    var elementValue = ($(this).attr("data-elementvalue"));
    elementValue = parseInt(elementValue);
    
    counter += elementValue;
    // alert("New Score: " + counter);
    $("#counter").text(counter);

    if (counter === targetNumber) {
        wins++;
        // alert("you win");
    } else if (counter >= targetNumber) {
        losses++;
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



