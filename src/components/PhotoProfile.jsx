import "../styles/photo-profile.scss";

export default function PhotoProfile({ text }) {
  return (
    <div className="photo-profile-wrapper">
      <p className="photo-profile__text">{text}</p>
    </div>
  )
}