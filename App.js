import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
const store = configureStore();

// Register Screens
Navigation.registerComponent("rn.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("rn.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("rn.FindPlaceScreen", () => FindPlaceScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "rn.AuthScreen",
    title: "Login"
  }
}); 