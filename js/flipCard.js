let colorToGuess;

function randomColor() {
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
let card = document.querySelectorAll(".card");
//we need random colours for the cards  
let numOfCards = card.length;

//generate  RGB colour. 
function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add number of cards random colors to arr
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}
const colorPicker = function() {
    colors = generateRandomColors(numOfCards);

    //generating random index number of array
    let color = Math.floor(Math.random() * colors.length);
    colorToGuess = colors[color];

    $(".card1").css("background-color", colors[0]);
    $(".card2").css("background-color", colors[1]);
    $(".card3").css("background-color", colors[2]);
    $(".card4").css("background-color", colors[3]);
    $(".card5").css("background-color", colors[4]);
    $(".card6").css("background-color", colors[5]);

    //random color value
    $("#text").text(colorToGuess);
}


//newGame
$(".newGame").click(newGame);

function newGame() {
    colorPicker();
    $(".card").text("");
    let numofClicks = 4;
    $("#clicks").text(numofClicks);
    $(".card").on("click", function() {
        numofClicks--;
        if ($(this).css("background-color") === colorToGuess) {
            $(this).text("You got me!!");
            $(".card").off("click");
        } else {
            $(this).text("sorry, try again");
        }
        $("#clicks").text(numofClicks);
        if (numofClicks == 0) {
            $(".card").off("click");
            $(this).text("Time up!");

        }
    });
}



$(document).ready(function() {
    newGame();
});