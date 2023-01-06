import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './Screens/Home/Home';
import Details from './Screens/Details/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme.colors,
  background: "transparent"

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;