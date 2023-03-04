import classes from "./Modal.module.css";
import Button from "./Button";
export default function Modal(props) {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.overlay}>
        <div className={classes.modal}>
          <div className={classes.modalContent}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
