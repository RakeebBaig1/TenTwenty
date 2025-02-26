//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
    //  navigation.navigate('HomeScreen');
    navigation.navigate('Tabs');
      

     
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text>TEN TWENTY</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Splash;
