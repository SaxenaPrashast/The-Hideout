import {useState} from "react"
const SendMessages = () => {
    const [val,setVal]= useState("");  
    const handleSendMessage =(e)=>{
        e.preventDefault();
        console.log(val);
        setVal("");
    }
    return (
    <div className="bg-gray-300 fixed bottom-0 w-full py-10">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input  value = {val} onChange={e=>setVal(e.target.value)}className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className=" w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessages
