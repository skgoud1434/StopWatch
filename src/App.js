import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timer]);

  const change = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTimer(0);
    setIsRunning(false);
  };
  const format = (timer) => {
    const min = Math.floor(timer / 60);
    const sec = timer % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>

      <p>Time: {format(timer)}</p>

      <button onClick={change}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
