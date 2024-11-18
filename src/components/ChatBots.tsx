// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';
// import logo from '@/assets/logo-slv.webp';

// const mockResponses = [
//   'Hello! How can I assist you today?',
//   'Can you please provide more details?',
//   'I\'m here to help. Please tell me your issue.',
//   'I can help you with your booking. What would you like to know?',
//   'Our team is ready to assist you. Please tell me what you need.',
//   'I can assist with room bookings and inquiries. How may I help?',
//   'I\'m the bot, and I’m happy to help you. What can I do for you?',
//   'Feel free to ask about our services. I’m here to help!',
//   'You can ask me about the availability of rooms or any other service.',
//   'Thanks for reaching out! How can I help you today?',
// ];

// function ChatBot() {
//   const [messageIndex, setMessageIndex] = useState(0);

//   const self = this;

//   useEffect(() => {
//     // Send a welcome message when the component is mounted
//     addResponseMessage('Welcome to this **awesome** chat!');
//   }, []);

//   const handleNewUserMessage = (newMessage: string) => {
//     console.log(`New message incoming: ${newMessage}`);

//     // Cycle through mock responses (or you can randomize if desired)
//     setMessageIndex((prevIndex) => {
//       const nextIndex = (prevIndex + 1) % mockResponses.length;
//       addResponseMessage(mockResponses[nextIndex]);
//       return nextIndex;
//     });
//   };

//   return (
//     <div className="App">
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//         profileAvatar={logo}
//         title="My new awesome title"
//         subtitle="And my cool subtitle"
//       />
//     </div>
//   );
// }

// export default ChatBot;
'use client'
import React from 'react'
import ChatBot from "react-chatbotify";



const ChatBots = () => {
  return (
    <div>
        <ChatBot/>
    </div>
  )
}

export default ChatBots