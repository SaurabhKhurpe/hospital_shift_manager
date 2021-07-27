import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OpenScreen from './src/screens/OpenScreen';
import AppliedScreen from './src/screens/AppliedScreen';
import AcceptedScreen from './src/screens/AcceptedScreen';

import Register from './src/screens/Register';
import Login from './src/screens/Login';
import AuthLoading from './src/screens/AuthLoading';
import Home from './src/screens/Home';
import {theme} from './src/core/theme';
import UserContextProvider from './src/userContext';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme}>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AuthLoading" component={AuthLoading} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </PaperProvider>
  );
}

export default App;

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Open" component={OpenScreen} />
      <Tab.Screen name="Applied" component={AppliedScreen} />
      <Tab.Screen name="Accepted" component={AcceptedScreen} />
    </Tab.Navigator>
  );
}