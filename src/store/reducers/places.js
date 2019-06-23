import { findRepos } from 'jest-changed-files';
import {
  ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        // concat will simply add new value to existing array
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjB0N2MwM2R5eGxmODItT1RPTU9UT1BMIn0.SzAQcNJE0oK9w5kXwpmhFAxcQ5UPfIFIT_BLj-7UhLo/image;s=1080x720;cars_;/851181377_;slot=4;filename=eyJmbiI6IjB0N2MwM2R5eGxmODItT1RPTU9UT1BMIn0.SzAQcNJE0oK9w5kXwpmhFAxcQ5UPfIFIT+BLj-7UhLo_rev001.jpg'
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        // in this case filter will return a array without a selected element
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.placeKey)
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
