import React from "react";
import JoinGameScreen from "./JoinGameScreen";
import LoadingScreen from "./LoadingScreen";
import QuestionScreen from "./QuestionScreen";


export default class App extends React.Component {
    state = {
      currentScreen: 'Join'
    }

    joinRoom = (userName, daCode) => {
      console.log(`${userName} is joining room ${daCode}`);
      this.setState({currentScreen: "Question"});
    }

    submitAnswer = (answer) => {
      console.log(`Submitting the ${answer}`);
      this.setState({currentScreen: "Loading"});
    }

    createRoom(userName) {
      console.log(`${userName} is creating a room`);
    }

    render() {
      switch (this.state.currentScreen) {
        case "Join":
          return(<JoinGameScreen onJoin={this.joinRoom} onCreate={this.createRoom}/>);
        case "Question":
          alert("On question screen")
          return(<QuestionScreen name="Tim" question="If xxx were a superhero, what would be their Kryptonite?" onAnswer={this.submitAnswer}/>);
        case "Loading":
          return(<LoadingScreen/>);
      }
    }
}
