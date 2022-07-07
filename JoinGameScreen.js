import React from "react";
import { View, Text, TextInput, TouchableOpacity , StyleSheet} from 'react-native';

export default class JoinGameScreen extends React.Component {
  state = {
    name: '',
    code: '5454561321'
  }
  saveCode = (daCode) => {this.setState({code: daCode})}
  saveName = (userName) => {this.setState({name: userName});}
  render() {
    return (
      <View style={styles.maincontainer}>
        <Text style={styles.title}>Gotcha!</Text>
        <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
            <Text  style = {styles.label}>Name:</Text>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText = {this.saveName}
            />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text  style = {styles.label}>Code:</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            onChangeText = {this.saveCode}
          />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress = {() => this.props.onJoin(this.state.name, this.state.code)}> // TODO figure out why this breaks
            <Text style = {styles.submitButtonText}> Join </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress = {() => this.props.onCreate(this.state.name)}>
            <Text style = {styles.submitButtonText}> Create </Text>
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
      borderWidth:1,
      marginBottom:10,
      marginRight: 10,
      padding:10,
      width:'100%',
      borderRadius:10,
      justifyContent:'flex-start',
      flex:1,
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
   // fontWeight:"bold",
    fontSize: 18,
  },
  label:{
    marginLeft: 15,
    paddingRight : 5,
    paddingTop:15
  },
});