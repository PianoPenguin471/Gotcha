import React from "react";
import JoinGameScreen from "./JoinGameScreen";
import LoadingScreen from "./LoadingScreen";
import QuestionScreen from "./QuestionScreen";

const domain = "http://penguinboi.local/"

export default class App extends React.Component {
    state = {
      currentScreen: 'Join',
      roomCode: ''
    }
    
    players = []
    roomCode = ""

    joinRoom = (userName, daCode) => {
      console.log(`${userName} is joining room ${daCode}`);
      fetch(domain + "join_room/" + userName + "/" + daCode).then(promise => {promise.json().then(json => {players = json.players})})
      this.setState({currentScreen: "Loading"});
    }

    submitAnswer = (answer) => {
      console.log(`Submitting the ${answer}`);
      this.setState({currentScreen: "Waiting"});
    }

    createRoom(userName) {
      console.log(`${userName} is creating a room`);
      fetch(domain + "create_room/" + userName).then(
        prom => {
          prom.text().then(
            text => {
              this.setState({roomCode: text})
              alert("Code is" + text)
            }
          )
        }
      )
    }

    render() {
      switch (this.state.currentScreen) {
        case "Join":
          return(<JoinGameScreen onJoin={this.joinRoom} onCreate={this.createRoom}/>);
        case "Question":
          alert("On question screen")
          return(<QuestionScreen name="Tim" question="If xxx were a superhero, what would be their Kryptonite?" onAnswer={this.submitAnswer}/>);
        case "Waiting":
          return(<LoadingScreen players={this.players !== null ? this.players : null}/>);
      }
    }
}
