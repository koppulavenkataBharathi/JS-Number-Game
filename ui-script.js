
let remainingScore = 0;

function generateRandomNumbers() {
    return Math.floor(Math.random() * 10);
}

function startGame() {
    remainingScore = 0;
    document.getElementById("score").innerHTML = `<h1>Score: 0</h1>`;
    document.getElementById("remaining-score").innerHTML = `<h1>Remaining Score: 0</h1>`;
    document.getElementById("result").style.display = "none";
    document.querySelector('.start-game').style.display = "none";
    document.querySelector('.next-round-button').style.display = "block";
    nextRound();
}

function nextRound() {
    const a = generateRandomNumbers();
    const b = generateRandomNumbers();
    const c = generateRandomNumbers();

    document.getElementById('number1').value = a;
    document.getElementById('number2').value = b;
    document.getElementById('number3').value = c;

    let score = 0;

    if (a === b && b === c) {
        score += 1000;
        console.log("You are very lucky this time, You got 1000 INR as all the numbers are the same");
    } else if ((a % 2 === 0 && b % 2 === 0 && c % 2 === 0) || (a % 2 === 1 && b % 2 === 1 && c % 2 === 1)) {
        score += 300;
        console.log("You are lucky this time, you got 300 INR as all the numbers are either even or odd");
    } else if (Math.abs(a - b) === 1 && Math.abs(b - c) === 1 && Math.abs(a - c) === 1) {
        score += 800;
        console.log("You are lucky this time, you got 800 INR as all the numbers have a difference of 1");
    } else {
        console.log("You are not lucky this time");
    }

    document.getElementById("score").innerHTML = `<p>Score: ${score}</p>`;

    remainingScore += score - 100;
    document.getElementById("remaining-score").innerHTML = `<p>Remaining Score: ${remainingScore}</p>`;

    if (remainingScore <= 0) {
        document.getElementById("result").style.display = "block";
        document.querySelector('.next-round-button').style.display = "none";
        document.querySelector('.start-game').style.display="block";
      
        document.querySelector('.start-game').setAttribute("disabled", true);
        document.querySelector('.start-again-button').style.display ="block";
    }
    
}
function restartGame(){
    window.location.reload();  

}

