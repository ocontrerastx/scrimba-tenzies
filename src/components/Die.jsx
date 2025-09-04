import "./Die.css";

function Die(props) {
  function handleClick() {
    props.setHold(props.id);
  }

  return (
    <button
      onClick={handleClick}
      className={`die ${props.isHeld ? "is-held" : ""}`}
    >
      {props.value}
    </button>
  );
}

export default Die;
