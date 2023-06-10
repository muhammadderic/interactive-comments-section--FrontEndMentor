export default function ButtonWithIcon({ filename, text }) {
  return (
    <div className="reply-wrapper">
      <img src={`/images/${filename}.svg`} alt="icon to manage chat" className="icon" />
      <p className="reply-text">{text}</p>
    </div>
  )
}