function Bill({ bill, onSetBill }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
