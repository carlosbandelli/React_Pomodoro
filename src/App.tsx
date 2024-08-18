import { useState } from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={2500}
        shortRestTIme={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
