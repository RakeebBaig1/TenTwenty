//import liraries
import React, {Component, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
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
import {useIsFocused} from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';

// create a component
const Results = ({ route, navigation }) => {
    const [newTraining, setNewTraining] = useState();
    const isFocused = useIsFocused();
    const { data } = route.params;
    const [info,set_info] = useState()
     useEffect(() => {
        console.log(data)
      if (isFocused) {
    const temp={}
     temp.SessionNo = 1
     temp.Trainings = []
     for(let i=0; i<data.length; i++) {
        let tt=[]
        let sha= parseFloat(data[i]['Frequency'])
        for(let j=0;j<data[i]['total_Frequencies'];j++) {
                tt.push(sha.toFixed(2))
                sha= parseFloat(sha) + parseFloat(data[i]['increment'])
        }

     temp.Trainings.push(
        {
            Duration:data[i]['Duration'],
            Frequencies : tt
        }
     )
    }
     set_info(temp)
     
   let initialvalue = '{\n' +
   '  "SessionNo":1,\n' +
   '  "Trainings":[\n' 
   for(let c=0; c<temp.Trainings.length; c++){
    if(c==temp.Trainings.length-1){
      let dr=`  {\n  "Duration":${temp.Trainings[c]['Duration']},\n` 
      let fr=`	 "Frequencies":[${temp.Trainings[c]['Frequencies']}]\n}`
      initialvalue=initialvalue + dr + fr
    }
    else{
    let dr=`  {\n  "Duration":${temp.Trainings[c]['Duration']},\n` 
    let fr=`	 "Frequencies":[${temp.Trainings[c]['Frequencies']}]\n},`
    initialvalue=initialvalue + dr + fr
    }
    
   }
   
 initialvalue = initialvalue + '\n' +
 '  ]\n' +
 '}';
 console.log(initialvalue)
 setNewTraining(initialvalue)
    }
   
    }, [isFocused]);
    const handleCopyToClipboard = () => {
        Clipboard.setString(newTraining)

      };
  return (
   <ScrollView>
      <KeyboardAvoidingView
       // keyboardVerticalOffset={-10}
        behavior="position"
        style={{flex: 1,height: Height,backgroundColor:'white',   justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',width:Width}}
        enabled={true}>
   <TextInput
            multiline = {true}
            style={styles.inputTrainings}
            value={newTraining}
            disabled={true}
            scrollEnabled={true}
            label={"Trainings"}
            onChangeText={text => {
              setNewTraining(text);
            }}
            placeholder="JSON Format"
            placeholderTextColor="grey"
          />
           <TouchableOpacity
        style={styles.fabStyle}
       // icon="plus"
        onPress={()=>{
            Alert.alert('Copy-Text', '', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => handleCopyToClipboard()},
              ]);
        }}
        // label='EXTENDED FAB'
      ><Text style={{alignSelf:"center",color:'white',fontSize:14}}> 
      Copy</Text></TouchableOpacity>
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
  Card: {
    width:Width/1.02,
    height:Height/4,
    backgroundColor:'blue',
    marginTop:5,
    padding:Width/100,
   
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
  inputTrainings: {
    borderRadius: 10,
    height: Height/1.4,
    margin: 12,
    borderWidth: 1,
    width: Width/1.024,
    padding: 0,
    color: 'black',
    fontSize:20
  },
  fabStyle: {
    
    marginBottom: -90,
    position: 'absolute',
    borderRadius:20,
    margin: 25,
    right: -10,
    bottom: Dimensions.get('screen').height/11,
    backgroundColor: 'blue',
    width: 90,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center"
  },
});

//make this component available to the app
export default Results;
