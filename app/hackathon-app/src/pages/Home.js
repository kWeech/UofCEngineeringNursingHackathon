import { NavLink } from "react-router-dom";
import Page from "../components/Page";
import Button from "../components/Button";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <Page>
      <h1 className={classes.home}>HOME PAGE</h1>
      <div className={classes.buttonContainer}>
        <NavLink to="/flowsheet">
          <Button>FLOWSHEETS</Button>
        </NavLink>
        <NavLink to="/nursenotes">
          <Button>NURSENOTES</Button>
        </NavLink>
        <NavLink to="/qr">
          <Button>QR</Button>
        </NavLink>
        <NavLink to="/patientlist">
          <Button>PATIENTLIST</Button>
        </NavLink>
        <NavLink to="/policy">
          <Button>POLICY</Button>
        </NavLink>
        <NavLink to="/lexicomp">
          <Button>LEXICOMP</Button>
        </NavLink>
        <NavLink to="/orders">
          <Button>ORDERS</Button>
        </NavLink>
      </div>
    </Page>
  );
}
