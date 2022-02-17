// In order to keep code clean, Ive decided to place both button components inside a seperate container specifically for flex styling.

import "./ButtonContainer.css";
import PracticeButton from "./PracticeButton.js";
import TriviaGameButton from "./TriviaGameButton.js";


function ButtonContainer() {
  return (
    <div id="ButtonContainer">
      <PracticeButton />
      <TriviaGameButton />
    </div>
  );
}

export default ButtonContainer;
