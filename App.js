import React from 'react';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    center_container: {
      flex: 1,
      backgroundColor: '#ff68ff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});


export default class Home extends React.Component{
  render() {
    return (
      <View style={styles.center_container}>
      <Button
        title="Listen"
        onPress={() =>
          this.props.navigation.navigate('Listen')
        }
      />
      </View>
    );
  }
}
