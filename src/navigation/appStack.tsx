import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//Home
import {Home} from '../screens/home';
import {Login} from '../screens/auth/login/login';
import {SignUp} from '../screens/auth/signup/signUp';
import {EditProfile} from '../screens/profile/EditProfile';
import {ViewProfile} from '../screens/profile/ViewProfile';

export default function AppStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
    </Stack.Navigator>
  );
}
