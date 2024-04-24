import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SubTopicScreen from '../screens/SubTopicScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SubTopic" component={SubTopicScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
