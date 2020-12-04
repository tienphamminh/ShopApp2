import React, {useEffect, useContext} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';

import {UserContext} from '../context/UserContext';

const LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    setTimeout(async () => {
      setUser((state) => ({...state, isLoggedIn: false}));
    }, 100);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading Screen</Text>
      <ActivityIndicator size="large" color="#23a6d5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
