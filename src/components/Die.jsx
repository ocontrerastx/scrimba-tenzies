import "./Die.css";

function Die(props) {
  function handleClick() {
    props.setHold(props.id);
  }

  return (
    <button
      onClick={handleClick}
      className={`die ${props.isHeld ? "is-held" : ""}`}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      {props.value}
    </button>
  );
}

export default Die;
