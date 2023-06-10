import "../styles/register.scss";

export default function Login() {
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
          <form className="box">
            <h2>Login</h2>
            <input
              placeholder="Username"
              required
            />
            <button type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}