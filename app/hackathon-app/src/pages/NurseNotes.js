import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
  
export default function NurseNotes() {
 const [value, setValue] = useState('')
 const { listen, stop } = useSpeechRecognition({
   onResult: (result) => {
     setValue(result)
   }
 })
  
 return (
   <div>
     <textarea
       value={value}
       onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      <p>Yo check me out im text to speech</p>
     </div>
    )
  }