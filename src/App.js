import Chats from "./components/Chats";
import CommentBox from "./components/CommentBox";
import Register from "./pages/Register";
import { data } from "./data";
import "./styles/app.scss";

function App() {
  return (
    // <div className="app-container">
    //   {data.comments.map(comment => (
    //     // <ChatBox key={comment.id} data={comment} />
    //     <Chats key={comment.id} data={comment} />
    //   ))}
    //   <CommentBox />
    // </div>
    <>
      <Register />
    </>
  );
}

export default App;
