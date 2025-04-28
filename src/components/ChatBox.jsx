import Message from "../components/Message"

const ChatBox = () => {
    const messages = [
        {
            id: 1,
            text: "Hello there!",
            name : "Prashast Saxena"
        },
        {
            id: 2,
            text: "Hello!",
            name:"Prashast Saxena"
        }
    ]
  
    return (
        <div className="pb-44 pt-20 containerWrap">
            {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
            ))}
        </div>
    )
}

export default ChatBox
