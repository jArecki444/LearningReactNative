import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component {
    state = {
        placeName: "",
        places: []
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        })
    }

    render() {
        const placesOutput = this.state.places.map((place, i) =>
            <ListItem key={i} placeName={place} />
        );
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ width: 300 }}
                        value={this.state.placeName}
                        placeholder="Placeholder example"
                        onChangeText={this.placeNameChangedHandler}
                        style={styles.placeInput}
                    />
                    <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
                </View>
                <View style={styles.listContainer}>
                    {placesOutput}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 26,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
    listContainer: {
        width: "100%"
    }
});
