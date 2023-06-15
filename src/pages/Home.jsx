import { useEffect, useState } from "react";
import Chats from "../components/Chats";
import CommentBox from "../components/CommentBox";
import Navbar from "../components/Navbar";
import "../styles/home.scss";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("comments")));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-wrapper">
        {data.map(comment => (
          <Chats key={comment.id} data={comment} />
        ))}
        <CommentBox text="SEND" />
      </div>
    </div>
  )
}