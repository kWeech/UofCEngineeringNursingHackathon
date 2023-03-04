import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";
import { useReducer } from "react";

const modalHandlerController = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "MEDICATION":
      console.log("entered data gathered");
      {
        return {
          ...state,
          toggleState: action.response.data.value,
          loading: false,
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
        <Button>Community Appointments</Button>
      </Modal>
    </>
  );
}
