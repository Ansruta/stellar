
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import SpaceCraft from './SpaceCraft';
import DailyPic from './DailyPic';
import StarMap from './StarMap';

const stack =createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
       <stack.Screen name="Home" component={Home}/>
       <stack.Screen name="SpaceCraft" component={SpaceCraft}/>
       <stack.Screen name="DailyPic" component={DailyPic}/>
       <stack.Screen name="StarMap" component={StarMap}/>
     </stack.Navigator>
   </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
 
});
