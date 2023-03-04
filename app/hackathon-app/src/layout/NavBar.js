import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.nav}>
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <p className={classes.text}>HOME</p>
      </NavLink>
    </div>
  );
}
