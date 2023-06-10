import ChatBox from "./ChatBox"

export default function Chats({ data }) {
  return (
    <div>
      <ChatBox data={data} />
      <div className="chatbox-child">
        {data.replies.length > 0 ? data.replies.map(reply => (
          <ChatBox key={reply.id} data={reply} />
        )) : ""}
      </div>
    </div>
  )
}