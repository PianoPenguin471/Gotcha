import React, { Component } from "react";
import JoinGameScreen from "./JoinGameScreen";
import QuestionScreen from "./QuestionScreen";


export default class App extends Component {
    state = {
      currentScreen: 'Join'
    }

    joinRoom(userName, daCode) {
      console.log(`${userName} is joining room ${daCode}`);
    }

    createRoom(userName) {
      console.log(`${userName} is creating a room`);
    }

    render() {
      switch (this.state.currentScreen) {
        case "Join":
          return(<JoinGameScreen onJoin={this.joinRoom} onCreate={this.createRoom}/>);
        case "Question":
          return(<QuestionScreen/>)
      }
    }
}
