import React from 'react'

const ChatBot = ({handleChangesChatbot, chatbotInput ,handleSend,chatbotMessage}) => {
  return (
    <div>
                {/* Hidden Checkbox Toggle  */}
        <input type="checkbox" id="chat-toggle" />

       {/*   Chatbot Toggle Button  */}
        <label htmlFor="chat-toggle" className="btn btn-primary chat-btn">
            💬 Chat
        </label>

       {/*   Chat Popup  */}
        <div className="chat-popup">
            <div className="chat-header">
            ChatBot
            <label htmlFor="chat-toggle" className="close-chat">✖</label>
            </div>
            <div className="chat-body">
                {
                   chatbotMessage.length > 0 ?
                    <>
                        {
                            chatbotMessage.map((item, index) => {
                            return (
                                <p key={index}><strong>{item.text}:</strong> {item.message}</p>
                            )
                        })}
                    </>:
                    <p><strong>Bot:</strong> Hello! How can I help you?</p>
                    }
                    {/* {
                        loading? null :<p><strong>Bot:</strong> Searching Flights...</p>  
                    } */}
            </div>
            <div className="chat-footer d-flex align-items-center">
                <input type="text" className="form-control" placeholder="Type your message..." name="chatbot" value={chatbotInput} onChange={(e)=>handleChangesChatbot(e)}/>
                <button className='btn btn-primary btn-sm' onClick={() => handleSend()}>Send</button>
            </div>
        </div>

    </div>
  )
}

export default ChatBot