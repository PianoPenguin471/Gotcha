import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
export default class LoadingScreen extends React.Component {
    render() {
        return(<View><Text style={styles.title}>Gotcha!</Text></View>);
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
  }
});