import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNav from './AppNav';



const styles = StyleSheet.create({
    center_container: {
      flex: 1,
      backgroundColor: '#ff68ff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});


export class Listen extends React.Component{
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
    );
  }
}
