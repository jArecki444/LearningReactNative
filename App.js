import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

// Register Screens
Navigation.registerComponent("rn.AuthScreen", () => AuthScreen);
Navigation.registerComponent("rn.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("rn.FindPlaceScreen", () => FindPlaceScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "rn.AuthScreen",
    title: "Login"
  }
});