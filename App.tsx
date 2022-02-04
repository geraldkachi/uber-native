import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import { OriginContextProvider,DestinationContextProvider } from './src/contexts/contexts'
import RootNavigator from './src/navigations/RootNavigator'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
          <RootNavigator />
      </OriginContextProvider>
     </DestinationContextProvider>
     
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
