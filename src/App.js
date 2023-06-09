import ChatBox from "./components/ChatBox";
import { data } from "./data";
import "./styles/app.scss";

console.log(data.comments);

function App() {
  return (
    <div className="app-container">
      <ChatBox data={data.comments[0]} />
    </div>
  );
}

export default App;
