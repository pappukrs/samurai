const BotConfig = {
    initialMessages: [
      {
        text: "Welcome to our hotel! What is your name?",
        trigger: "ask_checkin",
      },
    ],
    state: {
      form: {}
    },
    customComponents: {},
    customStyles: {
      botMessageBox: {
        backgroundColor: "#491d8d",
      },
      chatButton: {
        backgroundColor: "#491d8d",
      },
    },
  };
  
  export default BotConfig;
  