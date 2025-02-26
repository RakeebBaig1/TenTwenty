//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  request,
} from 'react-native-permissions';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';

// create a component
const HomeScreen = ({navigation}) => {
  const navigate = screen => {
    if (screen) {
      navigation.navigate(screen);
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      no_Trainings: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
    let tempArray = [];
    for (let i = 0; i < control._formValues['no_Trainings']; i++) {
      tempArray.push({
        Duration: '',
        Frequency: '',
        total_Frequencies: '',
        increment: '',
      });
    }
    navigation.navigate("fill_Entries",{
      data: tempArray,
      
    })
  };

  return (
    <ScrollView style={{height: Dimensions.get('screen').height}}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-400}
        behavior="position"
        style={{flex: 1}}
        enabled={true}>
        <View style={styles.container}>
          <Text>Please Enter no of Trainings </Text>
          <Controller
            name="no_Trainings"
            control={control}
            rules={{
              required: {
                value: true,
                message: '* Required',
              },
              pattern: {
                value: /^\d{1,3}$/,
                message: ' * 1-1000 Range is',
              },
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                error={errors.no_Trainings}
                label={
                  !errors.no_Trainings
                    ? 'No of Trainings'
                    : errors.no_Trainings.message
                }
                mode="outlined"
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: Dimensions.get('window').height / 15,
                  marginTop: 50,
                  marginBottom: 7,
                }}
                activeOutlineColor={'blue'}
                selectionColor={'black'}
                multiline={false}
                keyboardType={"numeric"}
                onChangeText={(Textx)=>{onChange(Textx)
                console.log(Textx)}}
                value={value}
              />
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.button_label}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height:Dimensions.get("window").height,
    top:Dimensions.get("window").height/8,
   // justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
   
  },
  button_label: {
    
    fontSize: 14,
    color: 'white',
  },
  button: {
    marginTop:Dimensions.get('window').height/3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '7%',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: 'grey',
  },
});

//make this component available to the app
export default HomeScreen;
