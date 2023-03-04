import classes from './Note.module.css'

export default function Note(props) {
  return (
    <div id={props.id}>
        <div className={classes.date}>
      <p>Date:</p>
      <p>{props.date}</p></div>
      <div className={classes.note}>
      <h3>Note:</h3>
      <p>{props.note}</p></div>
    </div>
  );
}
