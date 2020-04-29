import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { SPIDERMAN_DETAILS, SPIDERMAN_HOME } from '../../routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={SPIDERMAN_HOME}>
      <Stack.Screen name={SPIDERMAN_HOME} component={HomeScreen} />
      <Stack.Screen name={SPIDERMAN_DETAILS} component={DetailsScreen} />
      {/* <Stack.Screen
          name={STARGATE_DETAILS}
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.show.name })}
        /> */}
    </Stack.Navigator>
  );
};

export default App;
