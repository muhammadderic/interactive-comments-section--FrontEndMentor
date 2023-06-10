import "../styles/register.scss";

export default function Register() {
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
          <form className="box">
            <input
              placeholder="Username"
              required
            />
            <button type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}