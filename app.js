const choices = document.querySelectorAll(".choice");

let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const getcompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
};

let showwinner = (userwin, compchoice, userchoice) => {
  if (userwin) {
    userscore++;
    userScore.innerText = userscore;
    console.log("You win.");
    msg.innerText = `You won! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    console.log("UserScore is ", userscore);
  } else {
    compscore++;
    compScore.innerText = compscore;
    console.log("You lose.");
    msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
    console.log("compscore is ", compscore);
  }
};

let drawgame = () => {
  console.log("Game was draw play again.");
  msg.innerText = "Game was draw play again.";
  msg.style.backgroundColor = "black";
};
const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  let compchoice = getcompchoice();
  console.log("Computer choice = ", compchoice);
  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //paper scissors
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock or scissors
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, compchoice, userchoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
