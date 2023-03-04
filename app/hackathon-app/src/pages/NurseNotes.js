import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import Note from '../components/Note';

const NOTES = [
  <Note date={"2022-12-03"} note={"This is a note"}/>,
  <Note date={"2022-12-15"} note={"This patient was so bad omg"}/>,
  <Note date={"2022-12-03"} note={"This was a great patient love them xoxo"}/>,
 ]

export default function NurseNotes() {
  const [notesArray, setNotesArray] = useState(NOTES);
 const [value, setValue] = useState('')
 const { listen, stop } = useSpeechRecognition({
   onResult: (result) => {
     setValue(result)
   }
 })

const onSave = () => {
  const newNote = (<Note date={"2023-03-04"} note={value}/>)
  NOTES.push(newNote)
  setNotesArray(newNote);
}

 return (
   <div>
     <textarea
       value={value}
       onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} >
        🎤 Start
      </button>
      <button onMouseDown={stop}>
        🎤 Stop
      </button>
      <button onClick={onSave}>Save</button>
      <h2>Historic Notes</h2>
      <div>{NOTES}</div>
     </div>
    )
  }

