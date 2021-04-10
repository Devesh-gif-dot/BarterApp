import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screen/SignUpLoginScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screen/HomeScreen'
import ExchangeScreen from './screen/ExchangeScreen'

export default class App extends React.Component {
  render(){
    return (
    <View style={styles.container}>
      <AppConatiner />
    </View>
    );
  }
}
const tabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Exchange:{screen:ExchangeScreen}
})

const Switch = createSwitchNavigator({
  Login:{screen:LoginScreen},
  Tab:{screen:tabNavigator}
})

const AppConatiner = createAppContainer(Switch)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
