import "../styles/chatbox.scss";

export default function ChatBox() {
  return (
    <div className="chat-box-container">
      <div className="detail">
        <div className="photo-wrapper">
          <img src="/images/avatars/image-amyrobson.png" alt="profile" />
        </div>
        <p className="name">amyrobson</p>
        <p className="date">1 month ago</p>
      </div>
      <p className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe!</p>
      <div className="control">
        <div className="vote-wrapper">
          <img src="/images/icon-plus.svg" alt="vote" className="icon-plus" />
          <p className="vote-num">0</p>
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