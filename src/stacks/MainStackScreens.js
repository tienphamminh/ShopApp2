import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: '#222222',
      paddingBottom: 12,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName = 'home-outline';

      switch (route.name) {
        case 'Home':
          iconName = 'home-outline';
          break;
        case 'Cart':
          iconName = 'cart-outline';
          break;
        case 'Notification':
          iconName = 'notifications-outline';
          break;
        case 'Profile':
          iconName = 'person-outline';
          break;
        default:
          iconName = 'home-outline';
      }
      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? '#0d458f' : '#666666'}
        />
      );
    },
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Cart" component={CartScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
