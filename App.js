import React, { Component } from "react";
import JoinGameScreen from "./JoinGameScreen";
import QuestionScreen from "./QuestionScreen";


export default class App extends Component {
    state = {
      currentScreen: 'Join'
    }

    joinRoom = (userName, daCode) => {
      console.log(`${userName} is joining room ${daCode}`);
      this.setState({currentScreen: "Question"});
    }

    createRoom(userName) {
      console.log(`${userName} is creating a room`);
    }

    render() {
      switch (this.state.currentScreen) {
        case "Join":
          return(<JoinGameScreen onJoin={this.joinRoom} onCreate={this.createRoom}/>);
        case "Question":
          return(<QuestionScreen name="Jimothy" question="If xxx were a superhero, what would be their Kryptonite?"/>)
      }
    }
}
