function rockPaperScissorsGame() {
  console.log("Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game");

  const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
  if (!userChoicePrompt) {
    console.log("No input given, exiting...");
    return;
  }
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("User selected:", userChoice);
  console.log("Computer selected:", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You the User WIN, yay!!!!");
  } else if (userChoice === computerChoice) {
    console.log("The Game is a Tie");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh Ho... Computer Wins!!!!");
  } else {
    console.log("Please check the input, We didn't understand it.");
  }

  const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
  if (playAgainPrompt && playAgainPrompt.toLowerCase() === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for Playing! See you Next Time");
  }
}

rockPaperScissorsGame();
