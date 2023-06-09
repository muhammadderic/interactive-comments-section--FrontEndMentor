import "../styles/commentbox.scss";

export default function CommentBox() {
  return (
    <div className="comment-box-container">
      <textarea placeholder="Add a comment..." />
      <div className="profile">
        <div className="photo-wrapper">
          <img src="/images/avatars/image-ramsesmiron.png" alt="profile" />
        </div>
        <button className="send">SEND</button>
      </div>
    </div>
  )
}