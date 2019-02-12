const outcome = document.querySelector(".result");
const reset = document.querySelector("button");
const rock1 = document.querySelector("#rock");
const paper1 = document.querySelector("#paper");
const scissors1 = document.querySelector("#scissors");
const userHand = document.querySelector(".user_hands");
const pcHand = document.querySelector(".pc_hands");
let pscore=0;
let cscore=0;  
const userScore = document.querySelector("#user_score");
const pcScore = document.querySelector("#pc_score");
const finalResult = document.querySelector(".result_final")

reset.addEventListener("click", resetGame);
rock1.addEventListener("click", rockClick);
paper1.addEventListener("click", paperClick);
scissors1.addEventListener("click", scissorsClick);

function resetGame() {
  userScore.textContent="0";
  pcScore.textContent="0";
  outcome.textContent="";
  finalResult.textContent="";
  pscore=0;
  cscore=0;
  rock1.addEventListener("click", rockClick);
  paper1.addEventListener("click", paperClick);
  scissors1.addEventListener("click", scissorsClick);
  userHand.src="res/ok.png";
  pcHand.src="res/ok2.png";
}

function endGame() {
rock1.removeEventListener("click", rockClick);
paper1.removeEventListener("click", paperClick);
scissors1.removeEventListener("click", scissorsClick);
}

//click on rock
function rockClick() {
  userHand.src="res/r.png";

  const computerSelection = computerPlay();
  if (computerSelection == "rock") {
    pcHand.src="res/r2.png";
  }
  else if (computerSelection == "paper") {
    pcHand.src="res/p2.png";
  }
  else if (computerSelection == "scissors") {
    pcHand.src="res/s2.png";
  }

  const playerSelection = "rock";
  const result=(playRound(playerSelection,computerSelection));
  outcome.textContent=result;
  const resultArray = result.split(" ");
  if(resultArray[4] == "You") {
    pscore++;
    userScore.textContent=pscore;
  }
  else if (resultArray[4] == "Computer") {
    cscore++;
    pcScore.textContent=cscore;
  }

  if(pscore == 5) {
    finalResult.textContent = "You win!";
    endGame();
  }
  else if(cscore == 5) {
    finalResult.textContent = "Computer wins!";
    endGame();
  }
}
//click on paper
function paperClick() {
  userHand.src="res/p.png";

  let computerSelection = computerPlay();

  if (computerSelection == "rock") {
    pcHand.src="res/r2.png";
  }
  else if (computerSelection == "paper") {
    pcHand.src="res/p2.png";
  }
  else if (computerSelection == "scissors") {
    pcHand.src="res/s2.png";
  }

  const playerSelection = "paper";
  const result=(playRound(playerSelection,computerSelection));
  outcome.textContent=result;
  const resultArray = result.split(" ");
  if(resultArray[4] == "You") {
    pscore++;
    userScore.textContent=pscore;
  }
  else if (resultArray[4] == "Computer") {
    cscore++;
    pcScore.textContent=cscore;
  }

  if(pscore == 5) {
    finalResult.textContent = "You win!";
    endGame();
  }
  else if(cscore == 5) {
    finalResult.textContent = "Computer wins!";
    endGame();
  }
}
//click on scissors
function scissorsClick() {
  userHand.src="res/s.png";

  let computerSelection = computerPlay();

  if (computerSelection == "rock") {
    pcHand.src="res/r2.png";
  }
  else if (computerSelection == "paper") {
    pcHand.src="res/p2.png";
  }
  else if (computerSelection == "scissors") {
    pcHand.src="res/s2.png";
  }
  
  const playerSelection = "scissors";
  const result=(playRound(playerSelection,computerSelection));
  outcome.textContent=result;
  const resultArray = result.split(" ");
  if(resultArray[4] == "You") {
    pscore++;
    userScore.textContent=pscore;
  }
  else if (resultArray[4] == "Computer") {
    cscore++;
    pcScore.textContent=cscore;
  }

  if(pscore == 5) {
    finalResult.textContent = "You win!";
    endGame();
  }
  else if(cscore == 5) {
    finalResult.textContent = "Computer wins!";
    endGame();
  }
}


function computerPlay(){
  let num = Math.random();
  num = num*3;
  if (num>=0 && num<1){
    return("rock");
  }
  else if (num>=1 && num<2){
    return("paper");
  }
  else if (num>=2 && num<=3){
    return("scissors");
  }
}

function playRound(a,b){
  if(a=="rock" && b=="paper"){
  return("Paper beats Rock - Computer scores!");
  }
  else if(a=="paper" && b=="scissors"){
    return("Scissors beat Paper - Computer scores!");
  }
  else if(a=="scissors" && b=="rock"){
    return("Rock beats Scissors - Computer scores!");
  }
  else if(a=="paper" && b=="rock"){
    return("Paper beats Rock - You score!");
  }
  else if(a=="scissors" && b=="paper"){
    return("Scissors beat Paper - You score!");
  }
  else if(a=="rock" && b=="scissors"){
    return("Rock beats Scissors - You score!");
  }
  else if(a==b){
    return("It's a draw!");
  }
}
