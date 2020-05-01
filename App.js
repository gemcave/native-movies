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
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Screen from './src/screen1';
import Two from './src/screen2';
import Three from './src/screen3';
import { BLUE } from './constants';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          <Drawer.Screen
            name="Batman"
            component={Two}
            options={{
              drawerLabel: 'Batman',
              drawerIcon: ({ focused, color, size }) => {
                return <MaterialIcons name="favorite" />;
              },
            }}
          />
          <Drawer.Screen
            name="Spiderman"
            component={Three}
            options={{
              drawerLabel: 'Spiderman',
              drawerIcon: ({ focused, color, size }) => {
                return <MaterialIcons name="pets" />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
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
