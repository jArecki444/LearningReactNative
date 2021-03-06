import {
  ADD_PLACE,
  DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
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
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        // in this case filter will return a array without a selected element
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
