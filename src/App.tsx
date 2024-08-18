import React, { useState } from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

// Função para converter o tempo inserido para segundos
function convertToSeconds(time: string): number {
  let seconds = 0;

  const timeValue = parseFloat(time);
  if (time.includes("h")) {
    seconds = timeValue * 3600; // Horas para segundos
  } else if (time.includes("m")) {
    seconds = timeValue * 60; // Minutos para segundos
  } else if (time.includes("s")) {
    seconds = timeValue; // Já está em segundos
  } else {
    seconds = timeValue; // Caso não haja especificação, assume que é em segundos
  }

  return seconds;
}

function App() {
  const [pomodoroTime, setPomodoroTime] = useState<number | undefined>(
    undefined
  );
  const [shortRestTime, setShortRestTime] = useState<number | undefined>(
    undefined
  );
  const [longRestTime, setLongRestTime] = useState<number | undefined>(
    undefined
  );
  const [cycles, setCycles] = useState<number>(4);

  return (
    <div className="container">
      <h1>Configurações de Pomodoro</h1>
      <div>
        <label>Tempo de Pomodoro (h, m, s): </label>
        <input
          type="text"
          placeholder="25m"
          onChange={(e) => setPomodoroTime(convertToSeconds(e.target.value))}
        />
      </div>
      <div>
        <label>Tempo de Descanso Curto (h, m, s): </label>
        <input
          type="text"
          placeholder="5m"
          onChange={(e) => setShortRestTime(convertToSeconds(e.target.value))}
        />
      </div>
      <div>
        <label>Tempo de Descanso Longo (h, m, s): </label>
        <input
          type="text"
          placeholder="15m"
          onChange={(e) => setLongRestTime(convertToSeconds(e.target.value))}
        />
      </div>
      <div>
        <label>Número de Ciclos: </label>
        <input
          type="number"
          value={cycles}
          onChange={(e) => setCycles(Number(e.target.value))}
        />
      </div>

      <PomodoroTimer
        pomodoroTime={pomodoroTime ?? 1500}
        shortRestTime={shortRestTime ?? 300}
        longRestTime={longRestTime ?? 900}
        cycles={cycles}
      />
    </div>
  );
}

export default App;
