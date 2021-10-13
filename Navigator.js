import React from "react";
// import { createNativeStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from "react-navigation";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home"

import Searchbar from "./screens/Searchbar";

import Searchdisplay from "./screens/Searchdisplay"

const Stack = createNativeStackNavigator();
function App() {
   return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
         
          <Stack.Screen name="Details" options={{headerShown:false}} component={Searchbar} />
          <Stack.Screen name="Searchresult" options={{headerShown:false}} component={Searchdisplay} />
        </Stack.Navigator>
      </NavigationContainer>
   )
      // Home:{
      //   screen:Home
      // }
      // Searchbar:{
      //   screen:Searchbar
      // }
 
  }

  export default App;