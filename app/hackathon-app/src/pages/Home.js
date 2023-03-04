import { NavLink } from "react-router-dom";
import Page from '../components/Page';
import Button from '../components/Button';

export default function Home() {
  return (
    <Page>
      <h1>THIS IS OUR HOME PAGE</h1>
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
    </Page>
  );
}
