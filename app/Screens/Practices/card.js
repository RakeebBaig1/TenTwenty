//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>
          {item?.name ? 'Name: ' : item?.name ? 'ID: ' : null}
          {item?.name ? item?.name : item?.id ? item?.id : null}
        </Text>
      </View>
      <View style={styles.saperator} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 40,
    marginTop: 10,
    marginLeft: 20,
    width: '100%',
  },
  saperator: {
    width: '100%',
    borderColor: '#c2baba',
    height: 1,
    borderWidth: 1,
    marginTop: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Card;
