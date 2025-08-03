let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let result = document.getElementById("result");
let choices = ["rock", "paper", "scissors"];
let again = document.getElementById("again");
let reset = document.getElementById("reset");

// Add event listeners only once
reset.addEventListener("click", () => {
  result.innerHTML = "";
  reset.style.display = "none";
  again.style.display = "none";
});

again.addEventListener("click", () => {
  result.innerHTML = "";
  reset.style.display = "none";
  again.style.display = "none";
});

btn1.addEventListener("click", () => {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  if (randomChoice === "rock") {
    result.innerHTML = "computer choose : 🪨 Rock <br> you choose : 🪨 Rock <br> it's a tie!";
    reset.style.display = "block";
  } else if (randomChoice === "paper") {
    result.innerHTML = "computer choose : 📄 Paper <br> you choose : 🪨 Rock <br> you lose!";
    again.style.display = "block";
  } else if (randomChoice === "scissors") {
    result.innerHTML = "computer choose : ✂️ Scissors <br> you choose : 🪨 Rock <br> you win!";
    reset.style.display = "block";
  }
});

btn2.addEventListener("click", () => {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  if (randomChoice === "rock") {
    result.innerHTML = "computer choose : 🪨 Rock <br> you choose : 📄 Paper <br> you win!";
    reset.style.display = "block";
  } else if (randomChoice === "paper") {
    result.innerHTML = "computer choose : 📄 Paper <br> you choose : 📄 Paper <br> it's a tie!";
    reset.style.display = "block";
  } else if (randomChoice === "scissors") {
    result.innerHTML = "computer choose : ✂️ Scissors <br> you choose : 📄 Paper <br> you lose!";
    again.style.display = "block";
  }
});

btn3.addEventListener("click", () => {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  if (randomChoice === "rock") {
    result.innerHTML = "computer choose : 🪨 Rock <br> you choose : ✂️ Scissors <br> you lose!";
    again.style.display = "block";
  } else if (randomChoice === "paper") {
    result.innerHTML = "computer choose : 📄 Paper <br> you choose : ✂️ Scissors <br> you win!";
    reset.style.display = "block";
  } else if (randomChoice === "scissors") {
    result.innerHTML = "computer choose : ✂️ Scissors <br> you choose : ✂️ Scissors <br> it's a tie!";
    reset.style.display = "block";
  }
});