// Description
// Test the user's memory with this simple little game. This will also put your skills up to the test!

// Instructions
// - Show the user 4 random numbers between 1 and 100 with an alert
// - When the user is ready to play the game... they click "OK"
// - After 15 seconds, ask them to enter each number in order
// - Let them know how many they got right!

// Challenge 1
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number
// - Enter the 2nd number
// Etc...

// Challenge 2
// Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function

// For example:

// playMemoryTest(4) should show and ask for 4 numbers

// playMemoryTest(10) should show and ask for 10 numbers




// - Show the user 4 random numbers between 1 and 100


const numbers = []

for(let i=0; i<4; i++){
 numbers.push(getRandomInt())
 console.log(numbers) 
    }   
function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

console.log(numbers)
alert(`This are the numbers: ${numbers.join(" ")} `)
  // - When the user is ready to play the game... they click "OK"
confirm("Are you ready to play the game? If yes, click OK!!!")

// - After 15 seconds, ask them to enter each number in order
function userPlay(){
const numbersChoosen = []
for(let i=0; i<4; i++){
    numbersChoosen.push(eachNumber())
    console.log(numbersChoosen) 
       }  
    }
setTimeout(userPlay, 3000)

function eachNumber() {
    return prompt(`Enter each number in order`)
}

// - Let them know how many they got right!

function checkUserNumbers() {
    let rightAnswers = 0;
    for (let i = 0; i < numbers.length; i++) {
      const computerNumbers = numbers[i];
      const guessNumbers = numbersChoosen[i];
      if (guessNumbers === computerNumbers) {
        rightAnswers += 1;
      }
    }
    if (rightAnswers === 0) {
      alert(`Game Over, 0 correct numbers`);
      tryAgain = prompt(`Would you like to try again?`);

      if (tryAgain.toLowerCase() === "Ok") {
        newNumberOfGuesses = Number(
          prompt(
            `Okey, great, I knew you wouldn't give up!Ler's Play again!!!`
          )
        );
        getRandomInt(newNumberOfGuesses);
      }
    } else {
      alert(`Great job! You found ${rightAnswers} right`);
    }
  }



