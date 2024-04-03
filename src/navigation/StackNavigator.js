// En StackNavigator.js
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { useAuth } from '../state/AuthContext'; // Verifica que la ruta sea correcta

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Stack.Navigator>
            {currentUser ? (
                <Stack.Screen 
                    name="Main" 
                    component={BottomTabNavigator} 
                    options={{ headerShown: false }} 
                />
            ) : (
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{ headerShown: false }} 
                />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
