import React, { useEffect } from 'react';

const ChatBox = () => {
  useEffect(() => {
    // Chatbase chatbot script setup
    const chatbaseScript = document.createElement('script');
    chatbaseScript.type = 'text/javascript';
    chatbaseScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "FR5_va3TWeZaFp3N_DA-3",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(chatbaseScript);

    const chatbaseEmbedScript = document.createElement('script');
    chatbaseEmbedScript.src = 'https://www.chatbase.co/embed.min.js';
    chatbaseEmbedScript.setAttribute('chatbotId', 'FR5_va3TWeZaFp3N_DA-3');
    chatbaseEmbedScript.setAttribute('domain', 'www.chatbase.co');
    chatbaseEmbedScript.defer = true;
    document.body.appendChild(chatbaseEmbedScript);

    // Clean up: remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(chatbaseScript);
      document.body.removeChild(chatbaseEmbedScript);
    };
  }, []);

  return (
    <div className="chatbox" style={{ position: 'fixed', bottom: '100px', right: '20px', zIndex: '1000' }}>
      <div className="chatbox-messages" id="embedded-chat-container">
        {/* The Chatbase widget will automatically inject the chat UI here */}
      </div>
    </div>
  );
};

export default ChatBox;
