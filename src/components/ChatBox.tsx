import React, { useState } from "react";
import { invoke } from '@tauri-apps/api/core';

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setChatHistory((prev) => [...prev, `Moi: ${message}`]);
      setMessage("");
      // Envoi du message au backend via Tauri
      try {
        const aiResponse = await invoke<string>('generate_response', { message });
        setChatHistory((prev) => [...prev, `AI: ${aiResponse}`]);
      } catch (error) {
        console.error('Failed to get AI response:', error);
      }
    }
  };

  return (
    <div className="chatBox" style={{ position: "fixed", bottom: 0, left: "200px", width: "calc(100% - 200px)", backgroundColor: "#2c2f33", color: "#ffffff" }}>
      <div className="chatHistory" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {chatHistory.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="inputContainer" style={{ display: "flex", padding: "10px", borderTop: "1px solid #23272a" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
          className="input"
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "none", marginRight: "10px", backgroundColor: "#40444b", color: "#ffffff" }}
        />
        <button onClick={handleSendMessage} className="button" style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#7289da", color: "#ffffff" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
