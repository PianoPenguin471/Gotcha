import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export const LoadingScreen = (props) => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(props.playerUpdateUrl)
            .then((response) => response.json())
            .then((json) => setPlayers(json.players))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    return (
        <View>
            <Text style={{backgroundColor: 'red', textAlign: 'center', padding: 10, fontSize: 25, color: '#FFFF', fontWeight:'bold', marginBottom: 30}}>Gotcha!</Text>
            {isLoading ? <ActivityIndicator color={"#f0a"} size={innerHeight / 4 - 50}/> : <Text style={{textAlign: 'center',fontSize: 20}}>{players.join(",\n")}</Text>}
        </View>
    );
};