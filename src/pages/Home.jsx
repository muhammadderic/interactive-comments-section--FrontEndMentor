import Chats from "../components/Chats";
import CommentBox from "../components/CommentBox";
import Navbar from "../components/Navbar";
import { data } from "../data";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-wrapper">
        {data.comments.map(comment => (
          <Chats key={comment.id} data={comment} />
        ))}
        <CommentBox text="SEND" />
      </div>
    </div>
  )
}