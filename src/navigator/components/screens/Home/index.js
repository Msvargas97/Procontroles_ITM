import React, { Component } from 'react';
import { View, Text } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hello World {JSON.stringify(this.props, null, 2)}</Text>
      </View>
    )
  };
};

