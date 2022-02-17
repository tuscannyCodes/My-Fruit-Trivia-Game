// In order to keep the main components simple, Ive decided to keep the button logic inside seperate components.
//This component is the logic and functionality behind the 'Practice' button.


const PracticeButtonFunction = () => {
  while (true) {
    let text = prompt(`Enter a fruit to get a fruit fact!`);
    let convertText = text.toLowerCase();

    switch (convertText) {
      case "banana":
        alert(`"bananas are best opened from the bottom!"`);
        break;

      case "apple":
        alert(`"apples can come in many diffrent colors!"`);
        break;

      case "kiwi":
        alert(
          `"the fuzzy hairs on the outside of the kiwi fruit are not dangerous."`
        );
        break;

      case "watermelon":
        alert(`" watermelon is 92% water!"`);
        break;

      case "strawberry":
        alert(
          `"strawberries are the only fruit that wear their seeds on the outside!"`
        );
        break;

      case "mango":
        alert(`"tropical mangoes are related to cashews and pistachios"`);
        break;

      case "dragonfruit":
        alert(
          `"dragonfruit grows on a cactus that blooms for one night per fruit cycle"`
        );
        break;

      case "pineapple":
        alert(
          `"only one pineapple is produced by a single plant in a single season."`
        );
        break;

      case "lemon":
        alert(`"lemons are native to Asia"`);
        break;

      case "orange":
        alert(`"there are over 600 varieties of oranges"`);
        break;

      case "pear":
        alert(`"pear\" and \"pair\" sound the same"`);
        break;

      case "grape":
        alert(
          `"it takes about 2.5 pounds of grapes to make one bottle of wine."`
        );
        break;

      case "grapes":
        alert(
          `"it takes about 2.5 pounds of grapes to make one bottle of wine."`
        );
        break;

      case "avacado":
        alert(`"yes, avacado is a fruit."`);
        break;

      case "tomato":
        alert(`"this is proof that pineapples DO in fact belong on pizza."`);
        break;

      case "papaya":
        alert(`"September is National Papaya Month!"`);
        break;

      case "blueberries":
        alert(
          `"The blueberry is one of the only foods that is naturally blue in colour."`
        );
        break;

      case "blueberry":
        alert(
          `"The blueberry is one of the only foods that is naturally blue in colour."`
        );
        break;

      case "peach":
        alert(
          `"The botanical name for peach is "Prunus persica", translated from Latin to "Present from Persia".`
        );
        break;

      default:
        alert(`"Is that even a fruit?"`);
        break;
    }
  }
}

export default PracticeButtonFunction;
