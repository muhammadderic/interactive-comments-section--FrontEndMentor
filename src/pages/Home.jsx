import Chats from "../components/Chats";
import CommentBox from "../components/CommentBox";
import { data } from "../data";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="app-container">
      {data.comments.map(comment => (
        <Chats key={comment.id} data={comment} />
      ))}
      <CommentBox text="SEND" />
    </div>
  )
}