import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [IsGameStarted, SetIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    SetIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {
        IsGameStarted ? <GamePlay/>  : <StartGame toggle={toggleGamePlay}/>
      }
    </>
  );
}

export default App;
