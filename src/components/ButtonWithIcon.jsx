export default function ButtonWithIcon({ filename, text, onClick }) {
  return (
    <button className="reply-wrapper" onClick={onClick}>
      <img src={`/images/${filename}.svg`} alt="icon to manage chat" className="icon" />
      <p className="reply-text">{text}</p>
    </button>
  )
}