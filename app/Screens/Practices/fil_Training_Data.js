//import liraries
import React, {Component, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
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
import {FAB} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import { Height,Width } from '../../Navigation/config';

// create a component
const Inputss = ({ route, navigation }) => {
 
    const { data } = route.params;
    const [arr,setArr] = useState(data)
  
    // useEffect(() => {
    //   if (isFocused) {
    //   const tempArray = [];
    //   for (let i = 0; i < total_Trainings; i++) {
    //     tempArray.push({
    //       Duration: '',
    //       Frequency: '',
    //       total_Frequencies: '',
    //     });
    //   }
    //   setArr(tempArray);
    // }
    // }, [isFocused]);
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
      Duration: '',
      Frequency: '',
      total_Frequencies: '',
    },
  });
  const onSubmit = data => {
    navigation.navigate('Result',{
      data: arr
    })
  };
  const update = (value,inde) =>{
    setArr(prevArray => {
      const newArray = [...prevArray];
      newArray[inde]['Duration'] = value;
      return newArray;
    });

  }

  return (
  
      <KeyboardAvoidingView
        keyboardVerticalOffset={-400}
        behavior="position"
        style={{flex: 1,height: Height,backgroundColor:'white',   justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      flexWrap: 'wrap',}}
        enabled={true}>
        <FlatList
          data={arr}
          renderItem={({item,index}) => {
            return ( <View style={styles.Card}>
                       
                       <Controller
            name="Frequency"
            control={control}
            rules={{
              required: {
                value: false,
                message: '* Required',
              },
              pattern: {
                value: /^\d{1,3}$/,
                message: ' * 1-1000 Range is',
              },
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
              error={errors.Frequency}
                label={
                  !errors.Frequency
                    ? 'Duration'
                    : errors.Frequency.message
                }
                mode="outlined"
          
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: Dimensions.get('window').height / 20,
                  marginTop: 0,
                  marginBottom: 7,
                }}
                activeOutlineColor={'blue'}
                selectionColor={'black'}
                multiline={false}
                keyboardType={"number-pad"}
                onChangeText={(val)=>update(val,index)}
                value={arr[index]['Duration']}
                />
                )}
              />
                     <Controller
            name="Frequency"
            control={control}
            rules={{
              required: {
                value: false,
                message: '* Required',
              },
              pattern: {
                value: /^\d{1,3}$/,
                message: ' * 1-1000 Range is',
              },
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                error={errors.Frequency}
                label={
                  !errors.Frequency
                    ? 'Frequency'
                    : errors.Frequency.message
                }
                mode="outlined"
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: Dimensions.get('window').height / 20,
                  marginTop: 0,
                  marginBottom: 7,
                }}
                activeOutlineColor={'blue'}
                selectionColor={'black'}
                scrollEnabled
                multiline={false}
                keyboardType={"numeric"}
                onChangeText={(Textx)=>{
                  setArr(prevArray => {
                    const newArray = [...prevArray];
                    newArray[index]['Frequency'] = Textx;
                    return newArray;
                  });
              }}
              value={arr[index]['Frequency']}
              />
            )}
          />
                     <Controller
            name="total_Frequencies"
            control={control}
            rules={{
              required: {
                value: false,
                message: '* Required',
              },
              pattern: {
                value: /^\d{1,3}$/,
                message: ' * 1-1000 Range is',
              },
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                error={errors.total_Frequencies}
                label={
                  !errors.total_Frequencies
                    ? 'Total Frequencies'
                    : errors.total_Frequencies.message
                }
                mode="outlined"
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: Dimensions.get('window').height / 20,
                  marginTop: 0,
                  marginBottom: 7,
                }}
                activeOutlineColor={'blue'}
                selectionColor={'black'}
                multiline={false}
                keyboardType={"numeric"}
                onChangeText={(Textx)=>{
                  setArr(prevArray => {
                    const newArray = [...prevArray];
                    newArray[index]['total_Frequencies'] = Textx;
                    return newArray;
                  });
              }}
              value={arr[index]['total_Frequencies']}
              />
            )}
          />
           <Controller
            name="Frequency"
            control={control}
            rules={{
              required: {
                value: false,
                message: '* Required',
              },
              pattern: {
                value: /^\d{1,3}$/,
                message: ' * 1-1000 Range is',
              },
            }}
            render={({field: {onChange, value}}) => (
             <TextInput
                mode="outlined"
                label='Increment'
                style={{
                  width: Width/ 3.5,
                  height:Height/ 20,
                  marginTop: Height/14,
                  marginLeft:Width/10
                }}
                activeOutlineColor={'blue'}
                selectionColor={'black'}
                multiline={false}
                keyboardType={"number-pad"}
                onChangeText={(Textx)=>{
                  setArr(prevArray => {
                    const newArray = [...prevArray];
                    newArray[index]['increment'] = Textx;
                    return newArray;
                  });
              }}
                value={arr[index]['increment']}
                />
            )}
          />
            </View>);
        }}
        keyExtractor={(item, index) => index.toString()}></FlatList>
        <TouchableOpacity
        style={styles.fabStyle}
       // icon="plus"
        onPress={handleSubmit(onSubmit)}
        // label='EXTENDED FAB'
      ><Text style={{alignSelf:"center",color:'white',fontSize:20}}> 
      {'>'}</Text></TouchableOpacity>
      </KeyboardAvoidingView>

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
  Card: {
    elevation:0,
    width:Width/1.02,
    height:Height/4,
    backgroundColor:'rgba(0, 0, 0, 0.04)',
    marginTop:5,
    padding:Width/100,
    flexWrap:"wrap"
   
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
  fabStyle: {
    marginBottom: -40,
    position: 'absolute',
    borderRadius:20,
    margin: 25,
    right: -10,
    bottom: Dimensions.get('screen').height/11,
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center"
  },
});

//make this component available to the app
export default Inputss;
