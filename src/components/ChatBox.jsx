import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ButtonWithIcon from "./ButtonWithIcon";
import CommentBox from "./CommentBox";
import PhotoProfile from "./PhotoProfile";
import CommentBoxEdit from "./CommentBoxEdit";
import "../styles/chatbox.scss";

export default function ChatBox({ data }) {
  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [editedChatId, setEditedChatId] = useState(null);
  const { user } = useContext(UserContext);

  const changeTypeOfTime = (time) => {
    let t = (Date.now() - time) / 3600000;
    if (t > 24) {
      t = t / 24;
      return `${t.toFixed()} days ago`;
    } else if (t < 1) {
      return "a moment ago";
    }
    return `${t.toFixed()} hour ago`;
  }

  const editHandler = (id) => {
    setEditBoxOpen(!editBoxOpen);
    setEditedChatId(id);
  }

  const replyHandler = () => {
    setReplyBoxOpen(!replyBoxOpen);
  }

  const deleteChatHandler = (id) => {
    const comments = JSON.parse(localStorage.getItem("comments"));
    const commentsFiltered = comments.filter(comment => comment.id !== id)
    console.log(commentsFiltered);
    localStorage.setItem("comments", JSON.stringify(commentsFiltered));
    window.location.reload();
  }

  return (
    <div className="chat-box-container">
      <div className="chat-box-wrapper">
        <div className="detail">
          <div className="photo-wrapper">
            <PhotoProfile text={data.user.username} />
          </div>
          <p className="name">{data.user.username}</p>
          <p className="date">{changeTypeOfTime(data.createdAt)}</p>
        </div>
        <p className="comment">{data.content}</p>
        <div className="control">
          <div className="vote-wrapper">
            <img src="/images/icon-plus.svg" alt="vote" className="icon-plus" />
            <p className="vote-num">{data.score}</p>
            <img src="/images/icon-minus.svg" alt="unvote" className="icon-minus" />
          </div>
          {user === data.user.username ?
            <div className="user-control">
              <ButtonWithIcon filename={"icon-delete"} text={"Delete"} onClick={() => deleteChatHandler(data.id)} />
              <ButtonWithIcon filename={"icon-edit"} text={"Edit"} onClick={() => editHandler(data.id)} />
            </div>
            :
            <ButtonWithIcon filename={"icon-reply"} text={"Reply"} onClick={replyHandler} />
          }
        </div>
      </div>
      {editBoxOpen && <CommentBoxEdit id={editedChatId} />}
      {replyBoxOpen && <CommentBox text="REPLY" />}
    </div>
  )
}