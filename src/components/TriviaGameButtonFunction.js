// In order to keep the main components simple, Ive decided to keep the button logic inside seperate components.
//This component is the logic and functionality behind the 'Play' button.

let fruitGuess;

//We array will store all possible fruit and randomly select one array position based on Math.random() buit in function. 
let fruitArray = [
  "banana",
  "apple",
  "kiwi",
  "pear",
  "pineapple",
  "peach",
  "grapes",
  "orange",
  "papaya",
  "tomato",
];

let randomNum = Math.floor(Math.random() * fruitArray.length);

let randomFruit = fruitArray[randomNum];

let tries = 0;

let hint;

//reload the page once game is won! 
const newRandomFruit = () => window.location.reload();





 //Here is the answer displayed in the console. 
console.log(`Shhh, dont tell anyone the answer is "${randomFruit}"`);

//This is the main fucntion of the game using the switch statement.
const TriviaGameButtonFunction = () => {
  do {
    if (randomFruit == "orange") {
      fruitGuess = prompt("The fruit Im thinking of is round"); //custom prompt for orange only.
    }

    if (randomFruit == "apple") {
      fruitGuess = prompt(
        "The fruit Im thinking of is hard, and cruches when you bite into it."
      ); //custom prompt for apple only.
    }

    if (randomFruit == "banana") {
      fruitGuess = prompt(
        "Most people dont know that the fruit Im thinking of is actually a berry. "
      ); //custom prompt for banana only.
    }
    if (randomFruit == "kiwi") {
      fruitGuess = prompt(
        "The fruit Im thinking of is the size of a large hens egg."
      ); //custom prompt for kiwi only.
    }

    if (randomFruit == "pear") {
      fruitGuess = prompt(
        "The fruit Im thinking of is the offical state fruit of Oregon."
      ); //custom prompt for pear a only.
    }

    if (randomFruit == "pineapple") {
      fruitGuess = prompt("The fruit Im thinking of is native to Hawaii"); //custom prompt for pineapple a only.
    }

    if (randomFruit == "peach") {
      fruitGuess = prompt(
        "The fruit Im thinking of is in a movie about a boy named James."
      ); //custom prompt for pear a only.
    }

    if (randomFruit == "grapes") {
      fruitGuess = prompt(
        "The fruit Im thinking of is a tasty snack when left out in sunlight."
      ); //custom prompt for grapes a only.
    }

    if (randomFruit == "grape") {
      fruitGuess = prompt(
        "The fruit Im thinking of is a tasty snack when left out in sunlight."
      ); //custom prompt for grape a only.
    }

    if (randomFruit == "papaya") {
      fruitGuess = prompt(
        "The fruit Im thinking of is the national fruit of September."
      ); //custom prompt for papaya a only.
    }
    if (randomFruit == "tomato") {
      fruitGuess = prompt(
        "The fruit Im thinking of is never once mentioned in the bible."
      ); //custom prompt for tomato a only.
    }
    let convertGuess = fruitGuess.toLowerCase();

    if (convertGuess != randomFruit) {
      alert("try again");
      tries += 1;
      console.log(tries);
    }

    //Hint feature: After certain number of tries, an alert is generated!-----------------------------------

    if (tries == 4 && randomFruit == "orange") {
      alert(
        "heres a hint: This fruit makes the most popular fruit juice in America."
      );
      tries += 1;
    }

    if (tries == 3 && randomFruit == "banana") {
      alert("heres a hint: Humans share about 50% of our DNA with this fruit.");
      tries += 1;
    }

    if (tries == 4 && randomFruit == "apple") {
      alert("heres a hint: A city is nicknamed after this fruit.");
      tries += 1;
    }

    if (tries == 3 && randomFruit == "kiwi") {
      alert("heres a hint: This fruit is fuzzy on the outside.");
      tries += 1;
    }

    if (tries == 4 && randomFruit == "tomato") {
      alert(
        "heres a hint: This fruit is red, and often mistaken for a vegetable."
      );
      tries += 1;
    }

    if (tries == 3 && randomFruit == "pineapple") {
      alert("heres a hint: This fruit is not a pine, or an apple.");
      tries += 1;
    }

    if (tries == 5 && randomFruit == "pear") {
      alert('heres a hint: Sounds like "pair".');
      tries += 1;
    }

    if (tries == 4 && randomFruit == "peach") {
      alert("heres a hint: The state of Gorgia is nicknamed after this fruit.");
      tries += 1;
    }

    if (tries == 5 && randomFruit == "papaya") {
      alert("heres a hint: This fruit has many black seeds in the middle.");
      tries += 1;
    }

    if (tries == 4 && randomFruit == "grapes") {
      alert("heres a hint: Some people squish this fruit with their feets.");
      tries += 1;
    }

    ////Hint feature: WORKING!--------------------------------------
    else if (fruitGuess == randomFruit) {
      
      alert(
        "You're amazing! " +
          "It only took you " +
          tries +
          " tries! Lets play again with another fun fruit!"
          );
          newRandomFruit();//reload the page once game is won! 
 
          
      console.log(randomFruit);
      break;
    }
  } while (fruitGuess != randomFruit);
};

export default TriviaGameButtonFunction;
