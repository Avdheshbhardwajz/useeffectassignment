import { useState } from "react";
import ScrollEventListener from "./ScrollEventListener";
import TimerComponent from "./TimerComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollEventListener />
      <TimerComponent />
    </>
  );
}

export default App;
