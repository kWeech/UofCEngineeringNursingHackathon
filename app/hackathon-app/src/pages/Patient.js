import { NavLink } from "react-router-dom";
import Button from '../components/Button';
import Page from "../components/Page";

export default function Patient(props) {
    return (
        <Page>
          <h1>Patient Menu</h1> 
          <Button>Call/Text</Button>
          <Button>Medications</Button>
          <Button>Care Team List</Button>
          <NavLink to="/flowsheet">
            <Button>FLOWSHEETS</Button>
          </NavLink>
          <Button>Community Appointments</Button>
        </Page>
    );
}