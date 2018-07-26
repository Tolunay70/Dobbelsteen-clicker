var score = 0;

function clicker() {

    var resultaat = Math.floor(Math.random()*6 +1);
    document.getElementById("resultaat").innerHTML = "You rolled: " + resultaat;

    if (resultaat <= 3){
        score--;
        document.getElementById("score").innerHTML = "Your score: " + score;

    }else {
        score++;
        document.getElementById("score").innerHTML = "Your score: " + score;
    }

    if (score < 0){
        score++;
        document.getElementById("score").innerHTML = "Your score: " + score;
    }

    if (score >= 10){
        document.getElementById("score").innerHTML = "You won!";
        score = 999;
    }
}