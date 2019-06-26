import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/auth/Auth';

// Register Screens
Navigation.registerComponent("rn.AuthScreen", () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "rn.AuthScreen",
    title: "Login"
  }
});