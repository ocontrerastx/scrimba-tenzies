import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      setHold={hold}
      id={die.id}
    />
  ));

  return (
    <main>
      <h1>Tenzies</h1>
      <p className="game-instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-button">
        Roll
      </button>
    </main>
  );
}

export default App;
