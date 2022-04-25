import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class QuestionScreen extends React.Component {
  constructor(props) {
    super();
    this.name=props.name || "Jimothy";
    this.onSubmit = props.onSubmit
  }
  state = {
    answer: ''
  }
  componentDidMount() {
    alert("Mounting")
    // Fetch question & name here
  }

  saveAnswer = (providedAnswer) => {this.setState({answer: providedAnswer});}
  render() {
    return (
      <View style={styles.maincontainer}>
        <Text style={styles.title}>Gotcha!</Text>
        <View style={styles.container}>
            <Text  style = {styles.label}>{this.props.question.replace("xxx", this.name)}</Text>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText = {this.saveAnswer}/>

          <TouchableOpacity style={styles.submitButton} onPress = {() => this.props.onAnswer(this.state.answer)}>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
      marginTop: 40,
      backgroundColor: '#d6ebff',
      height: 100000
  },

  input:{
      borderWidth: 1,
      marginVertical: 10,
      marginHorizontal:'5%',
      padding: 10,
      width:'90%',
      borderRadius :10,
      backgroundColor: '#ffffff'
  },
  title: {
      backgroundColor: 'red',
      textAlign: 'center',
      padding: 10,
      fontSize: 25,
      color: '#FFFF',
      fontWeight:'bold',
  },
  container: {
    marginTop: 40,
  },
  submitButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    textAlign: "center",
    color: 'white',
    fontSize: 18,
  },
  label:{
    marginLeft: 15,
    paddingRight : 5,
    paddingTop:15
  },
});