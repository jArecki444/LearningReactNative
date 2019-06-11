import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
    state = {
        placeName: ""
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
        this.props.onPlaceAdded(this.state.placeName);
    }


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ width: 300 }}
                    value={this.state.placeName}
                    placeholder="Name"
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
})


export default PlaceInput;