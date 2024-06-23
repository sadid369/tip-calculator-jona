function Reset({ onSetBill }) {
  return (
    <button
      onClick={() => {
        onSetBill();
      }}
    >
      Reset
    </button>
  );
}

export default Reset;
