// src/navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import LeaderBoard from '../screens/LeaderBoard';
import Profile from '../screens/Profile';
import Lab from '../screens/LabScreen';
import HomeStack from './HomeStack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../config/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Puntuación') {
            iconName = focused ? 'ios-trophy' : 'ios-trophy-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Laboratorio') {
            iconName = focused ? 'ios-flask' : 'ios-flask-outline';
          }

          // Puedes retornar cualquier componente que desees aquí:
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colors.tertiary,
        tabBarStyle: {
          height: 60, // Establece la altura que necesites
          backgroundColor: colors.secondary, // Color de fondo
          borderRadius: 30, // Ajusta el borderRadius para obtener una forma más ovalada
          position: 'absolute', // Posición absoluta para que sobresalga
          bottom: 30, // Espaciado desde la parte inferior
          left: 40, // Espaciado desde la izquierda
          right: 40, // Espaciado desde la derecha
          padding: 10, // Espaciado interno si es necesario
          borderTopWidth: 0,
          elevation:0
          //eliminar sombra
          
        },
        tabBarLabelStyle: {
            paddingBottom: 6, // Ajusta el valor según sea necesario para elevar el texto
            fontSize: 10, // Ajusta el tamaño de fuente si es necesario
            // Añade otros estilos de texto como fontFamily o color si es necesario
        }
        
      })}>
      <Tab.Screen name="Inicio" component={HomeStack} options={{ headerShown: false }}  />
      <Tab.Screen name="Laboratorio" component={Lab} options={{ headerShown: false }}  />
      <Tab.Screen name="Puntuación" component={LeaderBoard} options={{ headerShown: false }}  />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }}  />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
