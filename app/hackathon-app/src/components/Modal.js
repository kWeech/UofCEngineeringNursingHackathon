import classes from "./Modal.module.css";
export default function Modal(props) {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.overlay}>
        <div className={classes.modal}></div>
      </div>
    </div>
  );
}
