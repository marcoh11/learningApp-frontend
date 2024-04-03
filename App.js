import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base'; 
import { AuthProvider } from './src/state/AuthContext';
import StackNavigator from './src/navigation/StackNavigator';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider> 
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default App;
