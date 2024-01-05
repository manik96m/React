import { useState } from "react";

export default function CounterBatchUpdate() {
  const [number, setNumber] = useState(0);

  // This is how the event is handled,
  // because value of number for first render is 0
  // setNumber(0 + 1);
  // setNumber(0 + 1);
  // setNumber(0 + 1);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
