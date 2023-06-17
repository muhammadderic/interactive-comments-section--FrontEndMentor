import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/commentbox.scss";
import SubmitButton from "./SubmitButton";

export default function CommentBoxEdit({ id }) {
  const [commentText, setCommentText] = useState("");
  const [commentId, setCommentId] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem("comments"));
    const localComments = comments.filter(comment => comment.id === id);
    setCommentText(localComments[0].content);
    setCommentId(localComments[0].id);
  }, [id]);

  const commentForm = {
    "id": commentId,
    "content": commentText,
    "createdAt": Date.now(),
    "score": 0,
    "user": {
      "username": user,
    },
    "replies": []
  }

  const editHandler = (id) => {
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments = comments.filter(comment => comment.id !== id);
    comments.push(commentForm);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.reload();
  }

  return (
    <div className="comment-box-container">
      <textarea onChange={e => setCommentText(e.target.value)} value={commentText} />
      <div className="profile">
        <div className="photo-wrapper">
          <img src="/images/avatars/image-ramsesmiron.png" alt="profile" />
        </div>
        <SubmitButton text="EDIT" onClick={() => editHandler(id)} />
      </div>
    </div>
  )
}