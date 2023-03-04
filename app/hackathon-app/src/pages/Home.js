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
    </div>
  );
}
