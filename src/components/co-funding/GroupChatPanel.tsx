import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
}

interface GroupChatPanelProps {
  groupId: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export const GroupChatPanel: React.FC<GroupChatPanelProps> = ({
  messages,
  onSendMessage
}) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Group Chat</h3>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=${message.userName}`}
              alt={message.userName}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-medium text-gray-900">{message.userName}</span>
                <span className="text-xs text-gray-500">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-gray-600 mt-1">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};