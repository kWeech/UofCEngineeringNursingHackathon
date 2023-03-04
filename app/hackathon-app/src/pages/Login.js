import { NavLink } from "react-router-dom";
import Page from "../components/Page";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoginFormValid = () => {
    return username === "Sara" && password === "swordfish";
  };
  return (
    <Page show={false}>
      <h1>LOGIN PAGE</h1>
      <NavLink to="/home">
        <button disabled={!isLoginFormValid()}>LOGIN</button>
      </NavLink>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
    </Page>
  );
}
