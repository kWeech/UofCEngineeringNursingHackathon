import { NavLink } from "react-router-dom";
import Page from '../components/Page';

export default function Login() {
  return (
    <Page>
      <h1>HERE IS THE LOGIN PAGE</h1>
      <NavLink to="/home">
        <button>LOGIN</button>
      </NavLink>
    </Page>
  );
}
