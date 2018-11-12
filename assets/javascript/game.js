//Wrap everything in this to wait for html to load then load jQuery
$(function() {
    //global variables
    // wins, losses, targetScore, userScore
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = randomValue(120, 19);
    var winMessage = "YOU WIN!"
    var loseMessage = "YOU LOSE!"

    
    var imageArray = ["assets/images/fire.png",
    "assets/images/water.png",
    "assets/images/air.png",
    "assets/images/earth.png"];


    //Displays score board vaules
    function displayScoreBoard() {
    $("#target-number").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    // $("#counter").text(counter);
    }

    //Generates random numbers for both target number and values assiged to Elementals.
    function randomValue(max, min) {
        return Math.floor((Math.random() * (max - min)+1));
    };

    //Deletes images & attr to clear way for new images & attr.
    // Called in reset function below
    function deleteElementals () {
        for (var i = 0; i < imageArray.length; i++) {
            $("#elements img").remove();
        };
    }

    function resetGame() {
        var counter = 0;
        $("#counter").text(counter);

        targetNumber = randomValue(120,19);
        $("#target-number").text(targetNumber);

        $("#elements img").remove();
        displayElements();
    };

    //Adds images and assigns randome values to images
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
    
    displayScoreBoard();
    resetGame()
    

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
            resetGame();
            // displayElements();
            // alert("you win");
        } else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            $("#game-message").text(loseMessage);
            resetGame();
            // displayElements();
            // alert("you lose");
        }
    });

});



