import "../styles/chatbox.scss";

export default function ChatBox({ data: { content, createdAt, score, user: { username, image } }, child }) {
  return (
    <div className={child ? "chat-box-container-child" : "chat-box-container"}>
      <div className="detail">
        <div className="photo-wrapper">
          <img src={image.png} alt="profile" />
        </div>
        <p className="name">{username}</p>
        <p className="date">{createdAt}</p>
      </div>
      <p className="comment">{content}</p>
      <div className="control">
        <div className="vote-wrapper">
          <img src="/images/icon-plus.svg" alt="vote" className="icon-plus" />
          <p className="vote-num">{score}</p>
          <img src="/images/icon-minus.svg" alt="unvote" className="icon-minus" />
        </div>
        <div className="reply-wrapper">
          <img src="/images/icon-reply.svg" alt="reply" className="icon-reply" />
          <p className="reply-text">Reply</p>
        </div>
      </div>
    </div>
  )
}