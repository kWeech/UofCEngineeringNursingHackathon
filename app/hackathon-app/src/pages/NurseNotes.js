import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import Note from "../components/Note";
import Page from "../components/Page";
import classes from "./NurseNotes.module.css";

const NOTES = [
  <Note date={"2022-12-03"} note={"This is a note"} key={1} />,
  <Note date={"2022-12-15"} note={"This patient was so bad omg"} key={2} />,
  <Note
    date={"2022-12-03"}
    note={"This was a great patient love them xoxo"}
    key={3}
  />,
];

export default function NurseNotes(props) {
  const [notesArray, setNotesArray] = useState(NOTES);
  const [value, setValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const onSave = () => {
    const newNote = (
      <Note date={"2023-03-04"} note={value} key={Math.random()} />
    );
    setNotesArray([...notesArray, newNote]);
    setValue("");
  };

  const onClear = () => {
    setValue("");
  };

  const onSearchClear = () => {
    setFilterValue("");
  };

  // const onFilterClear

  return (
    <Page>
      <h2 className={classes.header}>Add New Note</h2>
      <div className={classes.addNoteContainer}>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className={classes.buttonContainer}>
          <button onMouseDown={listen}>🎤 Start</button>
          <button onMouseDown={stop}>🎤 Stop</button>
          <button onClick={onSave}>Save</button>
          <button onClick={onClear}>Clear</button>
        </div>
      </div>
      <h2>Historic Notes</h2>
      <textarea
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
      />
      <button onClick={onSearchClear}>Clear</button>
      <div>
        {notesArray.filter((note) =>
          note.props.note.toLowerCase().includes(filterValue.toLowerCase())
        )}
      </div>
    </Page>
  );
}
