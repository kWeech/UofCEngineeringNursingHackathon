import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";
import { useReducer } from "react";
import Medication from "../components/Medication";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
const modalHandlerController = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "Medications": {
      return {
        ...state,
        modal: true,
        modalType: <Medication content={state.patient.medication}></Medication>,
      };
    }
    case "Call/Text": {
      console.log("entered call/text");
      return {
        ...state,
        modal: true,
        modalType: <Contact content={state.patient}></Contact>,
      };
    }
  }
  return { ...state, modal: null };
};

export default function Patient(props) {
  const patient = useLocation();
  const [modalHandler, dispatchmodalHandler] = useReducer(
    modalHandlerController,
    {
      modal: false,
      modalType: null,
      patient: patient.state.patient,
    }
  );

  const ButtonClickHandler = (event) => {
    console.log(event.target.innerHTML);
    dispatchmodalHandler({
      type: event.target.innerHTML,
    });
  };

  return (
    <>
      <h1>Patient Menu</h1>
      {modalHandler.modal && <Modal>{modalHandler.modalType}</Modal>}
      <Button onClick={ButtonClickHandler}>Contact Information</Button>
      <Button onClick={ButtonClickHandler}>Medications</Button>
      <Button onClick={ButtonClickHandler}>Care Team List</Button>
      <NavLink to="/flowsheet">
        <Button>FLOWSHEETS</Button>
      </NavLink>
      <Button onClick={ButtonClickHandler}>Community Appointments</Button>
      <Link
        to="/nursenotes"
        state={{ content: patient.state.patient.nurseNotes }}
      >
        <Button>Nurse Notes</Button>
      </Link>
    </>
  );
}
