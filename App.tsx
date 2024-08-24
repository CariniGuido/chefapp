
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp, DrawerNavigationOptions } from '@react-navigation/drawer'; // Cambiado aquí
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ChefProfileScreen from './screens/ChefProfileScreen';
import BookingScreen from './screens/BookingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import CustomTheme from './screens/CustomTheme';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

// Define los tipos para CustomNavigationBar props
type CustomNavigationBarProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
  back?: boolean;
  route: RouteProp<ParamListBase, string>;
  options: DrawerNavigationOptions; // Cambiado aquí

};

export type RootDrawerParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ChefProfile: { chefId: string };
  Booking: { chefId: string };
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function CustomNavigationBar({ navigation, back }: CustomNavigationBarProps) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="TakeAChef" />
      {!back ? <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} /> : null}
    </Appbar.Header>
  );
}

const App = () => {
  return (
    <PaperProvider theme={CustomTheme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />, // Pasar todos los props
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
          <Drawer.Screen name="ChefProfile" component={ChefProfileScreen} 
            options={{ drawerItemStyle: { display: 'none' } }}
          />
          <Drawer.Screen name="Booking" component={BookingScreen}
            options={{ drawerItemStyle: { display: 'none' } }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;