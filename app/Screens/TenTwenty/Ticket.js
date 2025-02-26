import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {TicketStyles} from './globalSyle';
import {dates, showtimes} from '../Constants/const';
const MovieBookingScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [selectedDate, setSelectedDate] = useState('5 Mar');

  return (
    <View style={TicketStyles.container}>
 
      <View style={TicketStyles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{left: 20}}>
          <Icon2 name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '85%',
          }}>
          <Text style={TicketStyles.movieTitle}>{data.title}</Text>
          <Text style={TicketStyles.subtitle}>
            In Theaters December 22, 2021
          </Text>
        </View>
      </View>

    
      <Text style={TicketStyles.sectionTitle}>Date</Text>
      <View style={TicketStyles.dateContainer}>
        {dates.map(date => (
          <TouchableOpacity
            key={date}
            style={[
              TicketStyles.dateButton,
              selectedDate === date && TicketStyles.selectedDate,
            ]}
            onPress={() => setSelectedDate(date)}>
            <Text
              style={[
                TicketStyles.dateText,
                selectedDate === date && TicketStyles.selectedDateText,
              ]}>
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={showtimes}
        keyExtractor={item => item.time}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <Text style={TicketStyles.showtimeText}>
              {item.time}
              <Text style={TicketStyles.hallText}>{'  ' + item.hall}</Text>{' '}
            </Text>
            <View
              style={[
                TicketStyles.showtimeCard,
                item.selected && TicketStyles.selectedShowtime,
              ]}>
              <View style={TicketStyles.seatMap}>
                <Image
                  source={require('../../Assets/seats.jpeg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                  overflow="hidden"
                />
              </View>
            </View>
            <Text style={TicketStyles.priceText}>
              From <Text style={TicketStyles.bold}>{item.price}</Text> or{' '}
              <Text style={TicketStyles.bold}>{item.bonus} bonus</Text>
            </Text>
          </View>
        )}
      />

  
      <TouchableOpacity
        style={TicketStyles.selectButton}
        onPress={() => {
          navigation.navigate('Proceed', {
            data: data,
          });
        }}>
        <Text style={TicketStyles.selectButtonText}>Select Seats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieBookingScreen;
