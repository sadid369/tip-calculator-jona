function Tips({ children, tips, onSetTips }) {
  return (
    <div>
      <h3>{children}</h3>
      <select value={tips} onChange={(e) => onSetTips(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

export default Tips;
