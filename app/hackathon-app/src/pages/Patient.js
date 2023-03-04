import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

export default function Patient(props) {
    const [showModal, setShowModal] = useState(false);
    const handleCallTextButtonClick = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
    return (
        <Page>
          <h1>Patient Menu</h1> 
          <Button onClick={handleCallTextButtonClick}>Call/Text</Button>
          <Button>Medications</Button>
          <Button>Care Team List</Button>
          <NavLink to="/flowsheet">
            <Button>FLOWSHEETS</Button>
          </NavLink>
          <Button>Community Appointments</Button>
          {showModal && (
            <Modal onClose={handleCloseModal}>
              <h2>Call/Text Modal</h2>
              <p>Phone number: 403-999-9999</p>
            </Modal>
      )}
        </Page>
    );
}
