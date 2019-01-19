import React from 'react';
import Home from 'App.js';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  center_container: {
    flex: 1,
    backgroundColor: '#ff68ff',
    alignItems: 'center',
    justifyContent: 'center',
  },


export default class Listen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Button
          title="Stop Listening"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    )
  }
}
