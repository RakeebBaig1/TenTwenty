//import liraries
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/Practices/index';
// import Inputss from '../Screens/Practices/fil_Training_Data';
// import Results from '../Screens/Practices/result_Json';
// import {stackScreenOptions} from './config';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Fontisto";
import Icon3 from "react-native-vector-icons/Octicons";
import { Dashboard } from '../Screens/TenTwenty/Dashboard';
import MovieDetailsScreen from '../Screens/TenTwenty/description';
import MovieBookingScreen from '../Screens/TenTwenty/Ticket';
import SeatSelectionScreen from '../Screens/TenTwenty/ProceedtoPay';
const Stack = createStackNavigator();
// create a component
const Routes = () => {
  const renderNavigation = () => {
    return (
      <>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Tabs" component={Tabs} options={{
          headerTitle : "Home",
          headerLeft : null,
          headerShown : false,
        }} />
       <Stack.Screen name="description" component={MovieDetailsScreen} options={{
          headerTitle : "Home",
          headerLeft : null,
          headerShown:false
        }} />
     
        <Stack.Screen name="Booking" component={MovieBookingScreen} options={{
          headerTitle : "Generate",
          headerShown:false
        }}/>
            <Stack.Screen name="Proceed" component={SeatSelectionScreen} options={{
          headerTitle : "Generate",
          headerShown:false
        }}/>
      </> 
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={stackScreenOptions}
        initialRouteName="Splash">
        {renderNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};




const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
           
            if (route.name === 'Dashboard') {
     
              return <Icon name={'dots-circle'} size={size} color={color} />;
            } else if (route.name === 'Watch') {
          
              return <Icon2 name={'youtube-play'} size={size} color={color} />;
            } else if (route.name === 'Media Library') {
            
              return <Icon3 name={'stack'} size={size} color={color} />;
            } else {
             
              return <Icon name={'format-list-bulleted-square'} size={size} color={color} />;
            }
           
          },
          tabBarStyle: { backgroundColor: '#322F42',
          height: 80, // Increased height
          borderTopLeftRadius: 30, // Curve the left side
          borderTopRightRadius: 30, // Curve the right side
          position: "absolute", // Lifts the tab bar slightly
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: 10, // Extra padding for better design
          paddingTop: 10, // Mo
         },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Tab.Screen name="Watch" component={Dashboard}  options={{headerShown:false}} />
        <Tab.Screen name="Media Library" component={Dashboard}  options={{headerShown:false}}/>
        <Tab.Screen name="More" component={Dashboard}  options={{headerShown:false}}/>
      </Tab.Navigator>
  
  );
};




//make this component available to the app
export default Routes;


