class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleNameInput = (name) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          name: name,
        },
      }));
  
      const message = this.createChatBotMessage(
        `Hello ${name}! When will you be checking in?`
      );
      this.addMessageToState(message);
    };
  
    handleCheckinInput = (checkinDate) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          checkinDate: checkinDate,
        },
      }));
  
      const message = this.createChatBotMessage(
        `When will you be checking out?`
      );
      this.addMessageToState(message);
    };
  
    handleCheckoutInput = (checkoutDate) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          checkoutDate: checkoutDate,
        },
      }));
  
      const message = this.createChatBotMessage(
        `What kind of room would you prefer? (e.g. Single, Double, Suite)`
      );
      this.addMessageToState(message);
    };
  
    handleRoomPreference = (roomPreference) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          roomPreference: roomPreference,
        },
      }));
  
      const message = this.createChatBotMessage(
        `Do you have any doubts or questions about your stay?`
      );
      this.addMessageToState(message);
    };
  
    handleDoubts = (doubts) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          doubts: doubts,
        },
      }));
  
      if (doubts.toLowerCase().includes("wifi")) {
        const message = this.createChatBotMessage(
          "We offer free Wi-Fi throughout the hotel!"
        );
        this.addMessageToState(message);
      } else if (doubts.toLowerCase().includes("pool")) {
        const message = this.createChatBotMessage(
          "We have a pool located on the rooftop, open from 8 AM to 8 PM."
        );
        this.addMessageToState(message);
      } else {
        const message = this.createChatBotMessage(
          "Please feel free to ask about our services and amenities!"
        );
        this.addMessageToState(message);
      }
    };
  
    handleFeedback = (feedback) => {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          feedback: feedback,
        },
      }));
  
      const message = this.createChatBotMessage(
        "Thank you for your information! We hope you enjoy your stay."
      );
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  