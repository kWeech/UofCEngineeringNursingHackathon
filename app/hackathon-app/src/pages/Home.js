import { NavLink } from "react-router-dom";
import Page from '../components/Page';

export default function Home() {
  return (
    <Page>
      <h1>THIS IS OUR HOME PAGE</h1>
      <NavLink to="/flowsheet">
        <button>FLOWSHEETS</button>
      </NavLink>
      <NavLink to="/nursenotes">
        <button>NURSENOTES</button>
      </NavLink>
      <NavLink to="/qr">
        <button>QR</button>
      </NavLink>
      <NavLink to="/patientlist">
        <button>PATIENTLIST</button>
      </NavLink>
    </Page>
  );
}
