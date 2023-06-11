import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../styles/register.scss";

export default function Register() {
  const [username, setUsername] = useState("")
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async () => {
    dispatch({ type: "REGISTER", payload: username })
    navigate("/");
  }

  return (
    <div className="register">
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">Deric Interactive Comments</h3>
          <span className="description">
            This interactive comments only for your computer hehehe
          </span>
        </div>
        <div className="right">
          <form className="box" onSubmit={submitHandler}>
            <h2>Register</h2>
            <input
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">
              Sign Up
            </button>
          </form>
          <div className="link-register-login">
            <span className="to-register">Have account?</span>
            &nbsp;
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}