import React from 'react'
import { StyleSheet,
         Text,
         View, 
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>  
          </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})