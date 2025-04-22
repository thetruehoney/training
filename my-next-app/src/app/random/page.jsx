"use client";
import { useState } from "react";

export default function RandomTaskPage() {
  const [tasks] = useState(["Next round you play sitting on my dick",
                            "Deep throat me for as long as you can",
                            "Put an item of my choosing in your bummmm",
                            "Wank off in front of me for a couple of minutes",
                            "Find unsual position for me to fuck you in",
                            "Use an ice cube while you're sucking me",
                            "Let me use melted wax on your body",
                            "sit on my face until the end of the next round",
                            "suck my balls until the end of the next round",
                            "put at least 2 fingers in your hole",
                            "lick your favourite part of your partner's body",
                            "put a butt plug in until the end of the next round",
                            "let your partner put 1 toe inside of your hole",
                            "Wear an item of choting of my choosing for the rest of the game",
                            ]);
                            
  const [randomTask, setRandomTask] = useState("");

  const pickRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setRandomTask(tasks[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Random Task Picker</h2>
      <button
        onClick={pickRandomTask}
        className="bg-green-500 text-white p-2 rounded"
      >
        Pick a Random Task
      </button>
      {randomTask && <p className="mt-4 text-blue-500">{randomTask}</p>}
    </div>
  );
}
