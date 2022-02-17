// All components are stacked here to form the application. I have decided to keep the 'MainHeader' and 'FruitImage' components seperate for now because I may want to animate/style the header in the future, but these two components could be merged otherwise.

import React from "react";
import ButtonContainer from "./components/ButtonContainer.js";
import MainHeader from "./components/MainHeader.js";
import FruitImage from "./components/FruitImage.js";
function App() {
  return (
    <div>
      <FruitImage />
      <MainHeader />
      <ButtonContainer />
    </div>
  );
}

export default App;
