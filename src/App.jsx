import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <h1>Tenzies</h1>
      <p className="game-instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid-container">
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
      </div>
      <button className="roll-button">Roll</button>
    </main>
  );
}

export default App;
