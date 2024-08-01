

function numberGenerationGame() {
    let remainingScore = 0;
    const gameInterval = setInterval(() => {
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        let c = Math.floor(Math.random() * 10);
        console.log(a, b, c);

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

        console.log("Score:", score);

        remainingScore += score - 100; // Deduct 100 from the score and add to remainingScore
        console.log("Remaining Score:", remainingScore);

        if (remainingScore <= 0) {
            console.log("Game Over");
            clearInterval(gameInterval); // Stop the interval
        }
    }, 1000);
}

numberGenerationGame();
