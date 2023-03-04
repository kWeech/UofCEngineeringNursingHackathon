import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
