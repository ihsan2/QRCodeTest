import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// pages
import Login from './Pages/Login';
import Home from './Pages/Home';
import Splash from './Pages/Splash';
import ScanQR from './Pages/ScanQR';
import Profile from './Pages/Profile';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerLeft: () => null}}
        />
        <Stack.Screen
          name="ScanQR"
          component={ScanQR}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profil'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
