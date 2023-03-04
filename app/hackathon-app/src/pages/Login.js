import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>HERE IS THE LOGIN PAGE</h1>
      <NavLink to="/home">
        <button>LOGIN</button>
      </NavLink>
      <form >
      <input 
      type = "password" 
      placeholder = "Password"
      />
      
      </form>
    </div>
  );
}
