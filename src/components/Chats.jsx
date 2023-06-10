import ChatBox from "./ChatBox"

export default function Chats({ data }) {
  return (
    <div>
      <ChatBox data={data} child={false} />
      {data.replies.length > 0 ? data.replies.map(reply => (
        <ChatBox key={reply.id} data={reply} child={true} />
      )) : ""}
    </div>
  )
}