import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screens/Main';
import NewEntry from '../screens/NewEntry';
import Report from '../screens/Report';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

export default Routes;
