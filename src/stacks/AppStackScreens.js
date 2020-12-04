import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStackScreens from './AuthStackSreens';
import MainStackScreens from './MainStackScreens';

const AppStackScreens = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
      <AppStack.Screen name="Main" component={MainStackScreens} />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
