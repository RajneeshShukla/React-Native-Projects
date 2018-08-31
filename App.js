import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}</Text>
    );
  }
}

export default class LotsOfGreeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: '#ffdd00' }}>
          <Greeting name="Rajneesh"/>
          <Greeting name="Amit" />
          <Greeting name="seema" />
      </View>
    );
  }
}
