import { useState } from "react";
import Amount from "./components/Amount.js";
import Bill from "./components/Bill.js";
import Reset from "./components/Reset.js";
import Tips from "./components/Tips.js";

function App() {
  const [bill, setBill] = useState(0);
  const [myTips, setMyTips] = useState(0);
  const [friendTips, setFiendTips] = useState(0);

  function reset(params) {
    setBill(0);
    setMyTips(0);
    setFiendTips(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Tips tips={myTips} onSetTips={setMyTips}>
        How did you like the service?{" "}
      </Tips>
      <Tips tips={friendTips} onSetTips={setFiendTips}>
        How did your Friends like the service?{" "}
      </Tips>
      <Amount>
        {bill > 0
          ? `You Pay $${
              bill + bill * ((myTips + friendTips) / 2 / 100)
            } ($${bill} + $${
              (bill * (myTips / 100) + bill * (friendTips / 100)) / 2
            })`
          : ""}
      </Amount>
      {bill > 0 && <Reset onSetBill={reset} />}
    </div>
  );
}

export default App;
