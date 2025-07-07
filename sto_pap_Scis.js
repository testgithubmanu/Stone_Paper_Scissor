let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");

// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];  // <-- FIXED: should be options[randIdx], not options(randIdx)
};

const drawGame=()=>{
console.log("game was draw.");
 msg.innerText=" Game was draw. Play again.";
 msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText= `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
         msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        
         msg.style.backgroundColor="red";
        
    }
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

  if(userChoice===compChoice){
    //draw game
    drawGame();

  }else{
    let userWin=true;//assume user win
    if(userChoice==="rock"){
        //scissors, paper
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock, scissors
        userWin=compChoice==="scissors"?false:true;
    }else{
        //rock, scissors
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin, userChoice,compChoice);

  }
    // You can add result logic here (who wins etc.)
};

// Loop through each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
