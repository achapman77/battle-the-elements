//Wrap everything in this to wait for html to load then load jQuery
$(function() {
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
    $("#counter").text(counter);


    var imageArray = ["assets/images/fire.png",
    "assets/images/water.png",
    "assets/images/air.png",
    "assets/images/earth.png"];

    //function that could take in two ints and pass these to our math.random



    function reset() {
        counter = 0;
        $("#counter").text(counter);
        targetNumber = randomValue(120,19);
        $("#target-number").text(targetNumber);
        // for (var i = 0; i < imageArray.length; i++) {
        // imageElement.removeAttr("data-elementvalue");
        // };
        deleteElements();
        // displayElements();

    };

    function randomValue(max, min) {
        return Math.floor((Math.random() * (max - min)+1));
    };

    function deleteElements () {
        for (var i = 0; i < imageArray.length; i++) {
            $("#elements img").remove();
        };
    }

    function displayElements () {
        for (var i = 0; i < imageArray.length; i++) {
        
            var imageElement = $("<img>");
            
            imageElement.addClass("element-image");
            imageElement.attr("src", imageArray[i]);
            imageElement.attr("data-elementvalue", randomValue(12, 1));
            $("#elements").append(imageElement);
            console.log($(imageElement).attr("data-elementvalue"));
            
        };
    }

    displayElements();
    // reset();

    $(".element-image").on("click", function() {
        var elementValue = ($(this).attr("data-elementvalue"));
        elementValue = parseInt(elementValue);
        
        counter += elementValue;
        // alert("New Score: " + counter);
        $("#counter").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            $("#game-message").text(winMessage);
            reset();
            displayElements();
            // alert("you win");
        } else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            $("#game-message").text(loseMessage);
            reset();
            displayElements();
            // alert("you lose");
        }
    });

});



