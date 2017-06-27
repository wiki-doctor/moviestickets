import {AppRegistry} from 'react-native';

import App from './src/app';

AppRegistry.registerComponent('MoviesTickets_YCH', () => App);


/*
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

// First Page
class FirstPage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello First Page</Text>
        <Button 
          onPress={() => navigate('SecondPage')}
          title="Go to second page"
        />
      </View>
    );
  }
}

// Second Page
class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello Second Page</Text>
        <Button 
          onPress={() => navigate('FirstPage')}
          title="Go to first page"
        />
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  FirstPage: { screen: FirstPage},
  SecondPage: { screen: SecondPage},
});

AppRegistry.registerComponent('MoviesTickets_YCH', () => SimpleApp);
*/