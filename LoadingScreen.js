import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
export default class LoadingScreen extends React.Component {
    render() {
        return(
        <View>
            <Text style={styles.title}>Gotcha!</Text>
            <Text>{this.props.players}</Text>
            <ActivityIndicator color={"#f0a"} size={innerHeight / 2 - 50}/>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  title: {
      backgroundColor: 'red',
      textAlign: 'center',
      padding: 10,
      fontSize: 25,
      color: '#FFFF',
      fontWeight:'bold',
      marginBottom: 30
  }
});