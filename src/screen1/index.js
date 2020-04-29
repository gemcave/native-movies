import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { STARGATE_DETAILS, STARGATE_HOME } from '../../routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={STARGATE_HOME}>
      <Stack.Screen name={STARGATE_HOME} component={HomeScreen} />
      <Stack.Screen name={STARGATE_DETAILS} component={DetailsScreen} />
      {/* <Stack.Screen
          name={STARGATE_DETAILS}
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.show.name })}
        /> */}
    </Stack.Navigator>
  );
};

export default App;
