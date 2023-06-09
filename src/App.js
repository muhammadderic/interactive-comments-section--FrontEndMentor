import ChatBox from "./components/ChatBox";
import CommentBox from "./components/CommentBox";
import { data } from "./data";
import "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      {data.comments.map(comment => (
        <ChatBox data={comment} />
      ))}
      <CommentBox />
    </div>
  );
}

export default App;
