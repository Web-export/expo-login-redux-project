import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Store from './reduxStore'
import LoginPage from './pages/login';
import HomePage from './pages/home';

const Router = createStackNavigator(
  {
    Login: { 
      screen: LoginPage
    },
    Home: { 
      screen: HomePage
    }
  },
  {
    index: 0,
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const AppContainer = createAppContainer(Router);

export default (props) => {
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <AppContainer screenProps={props} />
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor:'red'
  }
})