import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import carImage from './src/assets/r34.png';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: placeName,
        image: {
          uri:
              'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjB0N2MwM2R5eGxmODItT1RPTU9UT1BMIn0.SzAQcNJE0oK9w5kXwpmhFAxcQ5UPfIFIT_BLj-7UhLo/image;s=1080x720;cars_;/851181377_;slot=4;filename=eyJmbiI6IjB0N2MwM2R5eGxmODItT1RPTU9UT1BMIn0.SzAQcNJE0oK9w5kXwpmhFAxcQ5UPfIFIT+BLj-7UhLo_rev001.jpg'
        }
      })
    }));
  };

  placeDeletedHandler = () => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
      selectedPlace: null
    }));
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
