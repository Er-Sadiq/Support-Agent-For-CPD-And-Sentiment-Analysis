import React, { useState } from 'react';
import axios from 'axios';

function Chatbox() {
  const [msg, setMsg] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendHandler = async (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    try {
      const response = await axios.post('http://localhost:8080/api/ask', { message: msg });

      const botReply = response.data.candidates[0].content.parts[0].text;

      setChatHistory((prev) => [
        ...prev,
        { sender: 'user', text: msg },
        { sender: 'bot', text: botReply },
      ]);
      setMsg('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const isEmpty = chatHistory.length === 0 && !msg.trim();

  return (
    <div className="w-full max-w-5xl my-auto h-[85%] bg-[#2d3044] shadow-lg rounded-xl p-4 flex flex-col justify-between items-center ">
      <div className="w-full h-full bg-slate-100 rounded-xl p-4 overflow-y-auto flex flex-col gap-4 relative ">
        {isEmpty ? (
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-500 text-4xl">
            What Can I Help You With ?..
          </p>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`self-${chat.sender === 'user' ? 'end' : 'start'} ${
                chat.sender === 'user' ? 'bg-blue-500 ml-auto rounded-bl-3xl rounded-tr-3xl text-start  text-sm font-semibold text-balance' : 'bg-gray-200 text-s  rounded-br-3xl rounded-tl-3xl text-start  text-sm font-semibold text-balance'
              } text-white py-2 px-4 max-w-xl`}
            >
              {chat.text}
            </div>
          ))
        )}
      </div>

      <div className="w-full mt-3">
        <form className="flex items-center gap-4" onSubmit={sendHandler}>
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type your message..."
            className="w-full py-2 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-100"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;
