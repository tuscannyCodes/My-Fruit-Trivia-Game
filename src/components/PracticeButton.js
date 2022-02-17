// Practice button component importing the 'PracticeButtonFunction' for functionality utilzed with onClick.

import "./ButtonStyles.css";
import PracticeButtonFunction from "./PracticeButtonFunction";
function PracticeButton() {
  <PracticeButtonFunction />;
  return (
    <button id="mainButtonStyle" onClick={PracticeButtonFunction}>
      Practice
    </button>
  );
}

export default PracticeButton;
