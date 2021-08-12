$(document).ready(function() {
    let move = 1;
    let play = true;

    $(".boxes").click(function(e) {
        e.preventDefault();
        if ($(this).text() == "" && play) {
            if (move % 2 == 1) {
                $(this).append("X");
                $(this).css("color", "rgb(1, 12, 17)");
            } else {
                $(this).append("O");
                $(this).css("color", "rgb(0, 219, 255)");
            }
            move++;

            if (winner() != -1 && winner() != "") {
                if (winner() == "X") {
                    $("#message").text("Winner is X");
                    $("#message").css("color", "#61892f");
                    $(".boxes").off("click");
                } else if (winner() == "O") {
                    $("#message").text("Winner is O");
                    $("#message").css("color", "#e85a4f");
                    $(".boxes").off("click");
                }
            }
        }
    });

    function winner() {
        box1 = $(".item1").text();
        box2 = $(".item2").text();
        box3 = $(".item3").text();
        box4 = $(".item4").text();
        box5 = $(".item5").text();
        box6 = $(".item6").text();
        box7 = $(".item7").text();
        box8 = $(".item8").text();
        box9 = $(".item9").text();

        //checking rows values
        if ((box1 == box2) && (box2 == box3)) {
            return box3;
        } else if ((box4 == box5) && (box5 == box6)) {
            return box6;
        } else if ((box7 == box8) && (box8 == box9)) {
            return box9;
        }

        //checking col values
        if ((box1 == box4) && (box4 == box7)) {
            return box7;
        } else if ((box2 == box5) && (box5 == box8)) {
            return box8;
        } else if ((box3 == box6) && (box6 == box9)) {
            return box9;
        }

        //checking diagnol values
        if ((box1 == box5) && (box5 == box9)) {
            return box9;
        } else if ((box3 == box5) && (box5 == box7)) {
            return box7;
        }
        //game tied
        return -1;
    }
    //new game
    $(".btn").click(function() {
        location.reload();
    })
});