import "../styles/chatbox.scss";
import ButtonWithIcon from "./ButtonWithIcon";

export default function ChatBox({ data }) {
  return (
    <div className="chat-box-container">
      <div className="detail">
        <div className="photo-wrapper">
          <img src={data.user.image.png} alt="profile" />
        </div>
        <p className="name">{data.username}</p>
        <p className="date">{data.createdAt}</p>
      </div>
      <p className="comment">{data.content}</p>
      <div className="control">
        <div className="vote-wrapper">
          <img src="/images/icon-plus.svg" alt="vote" className="icon-plus" />
          <p className="vote-num">{data.score}</p>
          <img src="/images/icon-minus.svg" alt="unvote" className="icon-minus" />
        </div>
        {data.replyingTo ?
          <div className="user-control">
            <ButtonWithIcon filename={"icon-delete"} text={"Delete"} />
            <ButtonWithIcon filename={"icon-edit"} text={"Edit"} />
          </div> :
          <ButtonWithIcon filename={"icon-reply"} text={"Reply"} />
        }
      </div>
    </div>
  )
}