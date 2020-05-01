/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Screen from './screen1';
import { BLUE } from '../constants';
import client from './apollo';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Screen1"
            drawerContentOptions={{
              activeTintColor: BLUE,
              contentContainerStyle: { marginVertical: 65 },
            }}
          >
            <Drawer.Screen
              name="Stargate"
              component={Screen}
              options={{
                drawerLabel: 'Stargate',
                drawerIcon: ({ focused, color, size }) => {
                  return <MaterialIcons name="grade" />;
                },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: BLUE,
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen
//           name="Stargate"
//           component={One}
//           options={{
//             tabBarIcon: ({ focused, color, size }) => {
//               const iconName = focused ? 'ios-videocam' : 'ios-play';
//               return <Ionicons name={iconName} size={25} color={color} />;
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Batman"
//           component={Two}
//           options={{
//             tabBarIcon: ({ focused, color, size }) => {
//               const iconName = focused ? 'ios-videocam' : 'ios-play';
//               return <Ionicons name={iconName} size={25} color={color} />;
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Spiderman"
//           component={Three}
//           options={{
//             tabBarIcon: ({ focused, color, size }) => {
//               const iconName = focused ? 'ios-videocam' : 'ios-play';
//               return <Ionicons name={iconName} size={25} color={color} />;
//             },
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyTabs;
