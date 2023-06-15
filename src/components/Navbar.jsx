import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/navbar.scss";

export default function Navbar() {
  const { dispatch } = useContext(UserContext);

  const logoutHandler = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.setItem("user", JSON.stringify({ username: null }));
      dispatch({
        type: "LOGOUT"
      })
    }
  }

  return (
    <nav className="navbar">
      <div className="brand-wrapper">
        <h1 className="brand">DIC</h1>
      </div>
      <button className="logout__button" onClick={logoutHandler}>Logout</button>
    </nav>
  )
}