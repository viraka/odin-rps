
let MyScore=0; 
let CScore=0;
let itr=0;
var btnValue;
var LogResult = document.querySelector("#result");
var WinnerResult = document.querySelector("#winner");
var btns = document.querySelectorAll('.btn');


function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    let b = ['rock', 'paper', 'scissors'];
    return b[a];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return "Tie Game! Computer chose " + computerSelection;
    else if (playerSelection == "rock" && computerSelection == "paper")
        return "You Lose! Computer chose " + computerSelection;
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return "You Lose! Computer chose " + computerSelection;
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return "You Lose! Computer chose " + computerSelection;
    else
        return "You Win! Computer chose " + computerSelection;
}

function checkWinnner(MyScore, CScore){
    if (MyScore == 5){
        WinnerResult.innerHTML = `<p>Game Over! You Win!</p>`;

    }
    else if (CScore == 5){
        WinnerResult.innerHTML = `<p>Game Over! You Lose!</p>`;
    }
}

function game(){
    if (MyScore<5 && CScore<5){
        const playerSelection = btnValue.toLowerCase();
        const computerSelection = getComputerChoice();
        Result = playRound(playerSelection, computerSelection);
        MyScore = Result.includes("Win") ? MyScore+1 : MyScore;
        CScore = Result.includes("Lose") ? CScore+1 : CScore;
        LogResult.innerHTML = `<p>${Result}</p><p>Your Score: ${MyScore} Computer Score: ${CScore}</p>`;
        itr++;
    }
    checkWinnner(MyScore, CScore);
}

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btnValue = e.target.textContent;
        game();
    })
});

