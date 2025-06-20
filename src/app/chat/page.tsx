"use client";
import React from 'react';

const mockMessages = [
  { id: 1, user: "Aisha", text: "As-salamu alaykum!", avatar: 'A' },
  { id: 2, user: "You", text: "Wa alaykum as-salam!", avatar: 'Y' },
  { id: 3, user: "Aisha", text: "How are you doing?", avatar: 'A' },
];

const ChatPage = () => {
  return (
    <div className="container mx-auto p-4 h-[85vh] flex">
      {/* User list sidebar */}
      <div className="w-1/4 bg-dark/50 rounded-l-lg p-4">
        <h2 className="text-xl font-serif text-gold mb-4">Conversations</h2>
        {/* User list placeholder */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-md bg-gold/20">
            <div className="w-10 h-10 rounded-full bg-ivory text-dark flex items-center justify-center font-bold">A</div>
            <span className="text-ivory font-semibold">Aisha</span>
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="w-3/4 bg-dark/30 rounded-r-lg flex flex-col">
        {/* Chat messages */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
          {mockMessages.map(msg => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.user === 'You' ? 'justify-end' : ''}`}>
              {msg.user !== 'You' && <div className="w-10 h-10 rounded-full bg-ivory text-dark flex items-center justify-center font-bold">{msg.avatar}</div>}
              <div className={`rounded-lg p-3 max-w-xs ${msg.user === 'You' ? 'bg-gold text-dark' : 'bg-ivory text-dark'}`}>
                {msg.text}
              </div>
              {msg.user === 'You' && <div className="w-10 h-10 rounded-full bg-gold text-dark flex items-center justify-center font-bold">{msg.avatar}</div>}
            </div>
          ))}
        </div>
        
        {/* Message input */}
        <div className="p-4 bg-dark/50">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-3 rounded-md bg-dark text-light border border-gold"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
