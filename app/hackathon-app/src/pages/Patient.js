import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";
import { useReducer } from "react";
import Medication from "../components/Medication";

const modalHandlerController = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "Call/Text":
      console.log("entered call/text");
      {
        return {
          ...state,
          modal: true,
          modalType: (
            <Medication content={state.patient.medication}></Medication>
          ),
        };
      }
    case "TOGGLE_CHANGED": {
      console.log("Entered Toggle Changed");
      return {
        ...state,
        toggleState: !state.toggleState,
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
    dispatchmodalHandler({
      type: event.target.innerHTML,
    });
  };

  return (
    <>
      <h1>Patient Menu</h1>
      {modalHandler.modal && <Modal>{modalHandler.modalType}</Modal>}
      <Button onClick={ButtonClickHandler}>Call/Text</Button>
      <Button>Medications</Button>
      <Button>Care Team List</Button>
      <NavLink to="/flowsheet">
        <Button>FLOWSHEETS</Button>
      </NavLink>
      <Button>Community Appointments</Button>
    </>
  );
}
