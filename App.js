import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/RIPNavigation'



export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
