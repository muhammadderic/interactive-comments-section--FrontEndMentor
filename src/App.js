import Chats from "./components/Chats";
import CommentBox from "./components/CommentBox";
import { data } from "./data";
import "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      {data.comments.map(comment => (
        // <ChatBox key={comment.id} data={comment} />
        <Chats key={comment.id} data={comment} />
      ))}
      <CommentBox />
    </div>
  );
}

export default App;
