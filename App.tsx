import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ShowProduct from './components/ShowProduct';
import SignIn from './components/SignIn';
import NewAccount from './components/NewAccount';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="ShowProduct" component={ShowProduct} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
