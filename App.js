/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import One from './src/screen1';
import Two from './src/screen2';
import Three from './src/screen3';
import { BLUE } from './constants';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: BLUE,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Stargate"
          component={One}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? 'ios-videocam' : 'ios-play';
              return <Ionicons name={iconName} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Batman"
          component={Two}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? 'ios-videocam' : 'ios-play';
              return <Ionicons name={iconName} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Spiderman"
          component={Three}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? 'ios-videocam' : 'ios-play';
              return <Ionicons name={iconName} size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
