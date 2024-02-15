import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens/Home';
import { DetailsPhoto } from './screens/DetailsPhoto';
import { useColorScheme } from 'react-native';
import { darkMode } from './store/darkMode';
const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  darkMode.setMode(isDarkMode);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} options={{title: 'Photo gallery'}} />
        <Stack.Screen name={'DetailsPhoto'} component={DetailsPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
