import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignOut" component={SignOut} />
    </Stack.Navigator>
  );
}
