function Button() {
  function handleClick() {
    alert("welcome to kazi connect!");
  }

  return (
    <button onClick={handleClick}>
      Get Started
    </button>
  );
}

export default Button;