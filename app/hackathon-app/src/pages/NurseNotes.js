import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

export default function NurseNotes() {
  const [notesArray, setNotesArray] = useState();
  const [value, setValue] = useState("");
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen}>🎤 Start</button>
      <button onMouseDown={stop}>🎤 Stop</button>
      <p>Yo check me out im text to speech</p>
    </div>
  );
}
