export default function SubmitButton({ text, onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      <p className="submit-text">{text}</p>
    </button>
  )
}