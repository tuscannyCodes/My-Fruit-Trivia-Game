// Play button component importing the 'TriviaGameButtonFunction' for functionality utilzed with onClick. 

import TriviaGameButtonFunction from "./TriviaGameButtonFunction.js";

function TriviaGameButton() {
  <TriviaGameButtonFunction />;
  return (
    <button id="mainButtonStyle" onClick={TriviaGameButtonFunction}>
      Play
    </button>
  );
}

export default TriviaGameButton;
