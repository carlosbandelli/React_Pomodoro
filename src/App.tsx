import { useState } from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={25} />
    </div>
  );
}

export default App;
