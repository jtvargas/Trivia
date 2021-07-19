import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Home, Quiz, Results } from '../Screens';
import { RootStackParamList } from '../Types';

const RootStack = createStackNavigator<RootStackParamList>();

const NAVIGATOR_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

const SCREEN_OPTIONS = { gestureEnabled: false };
const Root = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={NAVIGATOR_OPTIONS}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Quiz" component={Quiz} options={SCREEN_OPTIONS} />
      <RootStack.Screen
        name="Results"
        component={Results}
        options={SCREEN_OPTIONS}
      />
    </RootStack.Navigator>
  );
};

export default Root;
