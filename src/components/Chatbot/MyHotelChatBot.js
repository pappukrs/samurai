'use client';
import React, { useState } from "react";
import ChatBot from "react-chatbotify";

// Corrected export
const MyHotelChatBot = () => {
  const [form, setForm] = useState({});
  const [isOpen, setIsOpen] = useState(false); // To manage the open/close state of the chatbot

  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300,
  };

  const flow = {
    start: {
      message: "Hello there! What is your name?",
      function: (params) => {
        setForm((prevForm) => ({ ...prevForm, name: params.userInput }));
      },
      path: "ask_age",
    },
    ask_age: {
      message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
      function: (params) => {
        setForm((prevForm) => ({ ...prevForm, age: params.userInput }));
      },
      path: async (params) => {
        if (isNaN(Number(params.userInput))) {
          await params.injectMessage("Age needs to be a number!");
          return;
        }
        return "ask_pet";
      },
    },
    ask_pet: {
      message: "Do you own any pets?",
      options: ["Yes", "No"],
      chatDisabled: true,
      function: (params) => {
        setForm((prevForm) => ({ ...prevForm, pet_ownership: params.userInput }));
      },
      path: "ask_choice",
    },
    ask_choice: {
      message: "Select at least 2 and at most 4 pets that you are comfortable working with:",
      checkboxes: { items: ["Dog", "Cat", "Rabbit", "Hamster", "Bird"], min: 2, max: 4 },
      chatDisabled: true,
      function: (params) => {
        setForm((prevForm) => ({ ...prevForm, pet_choices: params.userInput }));
      },
      path: "ask_work_days",
    },
    ask_work_days: {
      message: "How many days can you work per week?",
      function: (params) => {
        setForm((prevForm) => ({ ...prevForm, num_work_days: params.userInput }));
      },
      path: async (params) => {
        if (isNaN(Number(params.userInput))) {
          await params.injectMessage("Number of work day(s) need to be a number!");
          return;
        }
        return "end";
      },
    },
    end: {
      message: "Thank you for your interest, we will get back to you shortly!",
      component: (
        <div style={formStyle}>
          <p>Name: {form.name}</p>
          <p>Age: {form.age}</p>
          <p>Pet Ownership: {form.pet_ownership}</p>
          <p>Pet Choices: {form.pet_choices}</p>
          <p>Num Work Days: {form.num_work_days}</p>
        </div>
      ),
      options: ["New Application"],
      chatDisabled: true,
      path: "start",
    },
  };

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle the state to open/close the chatbot
  };

  const closeChat = () => {
    setIsOpen(false); // Close the chatbot
  };

  return (
    <div>
      {/* Floating button to open the chatbot */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#491d8d",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "15px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Chat
      </button>

      {/* Conditionally render the chatbot when isOpen is true */}
      {isOpen && (
        <div
          style={{
            position: "fixed", // Position the chatbot at the bottom-right of the screen
            bottom: "20px", // 20px from the bottom
            right: "20px", // 20px from the right
            zIndex: 999, // Make sure it's above other content
          }}
        >
          <ChatBot
            settings={{
              general: { embedded: true },
              chatHistory: { storageKey: "example_complex_form" },
            }}
            flow={flow}
          />

          {/* Close button */}
          <button
            onClick={closeChat}
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

// Export default the component properly
export default MyHotelChatBot;
