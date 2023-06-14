import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/commentbox.scss";
import SubmitButton from "./SubmitButton";

export default function CommentBox({ text }) {
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(UserContext);

  const commentForm = {
    "content": commentText,
    "createdAt": Date.now(),
    "score": 0,
    "user": {
      "image": {
        "png": "./images/avatars/image-amyrobson.png",
      },
      "username": user,
    },
    "replies": []
  }

  const sendHandler = () => {
    const comments = JSON.parse(localStorage.getItem("comments"));
    comments.push({ id: comments.length + 1, ...commentForm });
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.reload();
  }

  return (
    <div className="comment-box-container">
      <textarea placeholder="Add a comment..." onChange={e => setCommentText(e.target.value)} />
      <div className="profile">
        <div className="photo-wrapper">
          <img src="/images/avatars/image-ramsesmiron.png" alt="profile" />
        </div>
        <SubmitButton text={text} onClick={sendHandler} />
      </div>
    </div>
  )
}