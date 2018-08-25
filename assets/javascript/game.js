$(document).ready(function () {

    var win = 0;
    var lose = 0;
    var rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // var crystal1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // var crystal2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // var crystal3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // var crystal4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var score = 0;

    $("#rng").text(rng);
    // $("#rng").text(rng);

    // function reset() {
    //     score = 0;
    //     rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // }

    // function winner() {
    //     alert("You Won");
    //     win++;
    //     $("#win").text(win);
    //     rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     score = 0;
    //     $("#rng").text(rng);
    //     crystal.attr("crystalnumber");
    // }

    // function loser() {
    //     alert("You Lost");
    //     lose++;
    //     $("#lose").text(lose);
    //     rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     score = 0;
    //     $("#rng").text(rng);
    //     crystal.attr("crystalnumber");
    // }

    var images = ["assets/images/41sLTbXkXZL._SL500_AC_SS350_.jpg", "assets/images/round-realistic_9cfcdd2c-1403-4b2b-9b9a-ad5fc3f96367_270x.png", "assets/images/red-ruby-stone-500x500.jpg", "assets/images/Melee_Sapphire_Blue_A_72ca4a79-7a1f-4676-a39b-05f60d004d93_1024x1024.png"]

    function initGame() {
        $("#crystalcreator").empty();
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>)");
    
            crystal.addClass("crystal");
    
            crystal.attr("src", images[i]);
    
            crystal.attr("crystalnumber", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    
            $("#crystalcreator").append(crystal);
        }
        $(".crystal").on("click", function () {
            var crystalvalue = ($(this).attr("crystalnumber"));
            crystalvalue = parseInt(crystalvalue);
    
            score += crystalvalue;
    
            $("#score").text(score);
    
            if (rng === score) {
                alert("You Won");
                win++;
                $("#win").text(win);
                reset()
            } else if (rng < score) {
                alert("You Lost");
                lose++;
                $("#lose").text(lose);
               reset()
            }
        })
    }

    function reset() {
        rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        score = 0;
        $("#rng").text(rng);
        $("#score").text(score);
        initGame();
    }

    initGame();
    // function winner() {
    //     alert("You Lost");
    //     lose++;
    //     $("#lose").text(lose);
    //     rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     score = 0;
    //     $("#rng").text(rng);
    //     crystal.attr("crystalnumber", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    // }

    // function loser() {
    //     alert("You Lost");
    //     lose++;
    //     $("#lose").text(lose);
    //     rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     score = 0;
    //     $("#rng").text(rng);
    //     crystal.attr("crystalnumber", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    // }
});
