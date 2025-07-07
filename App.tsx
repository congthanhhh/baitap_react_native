import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowProduct from './components/ShowProduct';
import SignIn from './components/SignIn';
import NewAccount from './components/NewAccount';
import Flower from './components/Flower';
import ShowFlower from './components/ShowFlower';
import CThoa from './components/CThoa';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LoaiHoa'
        screenOptions={{
          headerTitleAlign: 'center'
        }}>
        <Stack.Screen name="LoaiHoa" component={Flower} />
        <Stack.Screen name="Hoa" component={ShowFlower} />
        <Stack.Screen name="CThoa" component={CThoa} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="ShowProduct" component={ShowProduct} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
