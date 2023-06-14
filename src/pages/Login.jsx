import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../styles/register.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [loginStatus, setLoginStatus] = useState(true);
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const comments = JSON.parse(localStorage.getItem("comments"));
    if (comments.length > 0) {
      const commentFiltered = comments.filter(comment => comment.username === username)
      setUserComments(...commentFiltered);
    }
    if (users.includes(username)) {
      dispatch({
        type: "LOGIN", payload: {
          username,
          comments: userComments,
        }
      })
      navigate("/");
    } else {
      setLoginStatus(false);
    }
  }

  return (
    <div className="register">
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">Deric Interactive Comments</h3>
          <span className="description">
            Only using username...
          </span>
        </div>
        <div className="right">
          <form className="box" onSubmit={submitHandler}>
            <h2>Login</h2>
            <input
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className={`login-error ${loginStatus ? "error-hide" : ""}`}>User not found</p>
            <button type="submit">
              Sign In
            </button>
          </form>
          <div className="link-register-login">
            <span className="to-register">Create account here!</span>
            &nbsp;
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}