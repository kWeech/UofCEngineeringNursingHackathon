import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

export default function Patient(props) {
  const location = useLocation();
  return (
    <>
      <h1>Patient Menu</h1>
      <Modal>
      <Button>Call/Text</Button>
      <Button>Medications</Button>
      <Button>Care Team List</Button>
      <NavLink to="/flowsheet">
        <Button>FLOWSHEETS</Button>
      </NavLink>
      <Button>Community Appointments</Button></Modal>
    </>
  );
}
