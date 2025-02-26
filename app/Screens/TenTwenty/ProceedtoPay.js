import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {Height, Width} from '../../Navigation/config';
import Icon from 'react-native-vector-icons/Entypo';
import {cols, rows, seatPrices, seatTypes} from '../Constants/const';
import {ProceedTopayStyles} from './globalSyle';
const generateSeats = () => {
  let seats = [];
  for (let row = 1; row <= rows; row++) {
    let rowSeats = [];
    for (let col = 1; col <= cols; col++) {
      let type = 'regular';
      if (row === 10) type = 'vip';
      if (Math.random() < 0.1) type = 'unavailable';

      rowSeats.push({
        id: `${row}-${col}`,
        row,
        col,
        type,
        selected: false,
      });
    }
    seats.push(rowSeats);
  }
  return seats;
};

const SeatSelectionScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (row, col) => {
    const updatedSeats = seats.map(seatRow =>
      seatRow.map(seat => {
        if (
          seat.row === row &&
          seat.col === col &&
          seat.type !== 'unavailable'
        ) {
          seat.selected = !seat.selected;
          if (seat.selected) {
            setSelectedSeats(prev => [...prev, seat]);
          } else {
            setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
          }
        }
        return seat;
      }),
    );

    setSeats(updatedSeats);
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + (seatPrices[seat.type] || 0);
  }, 0);

  return (
    <View style={ProceedTopayStyles.container}>
      <View style={ProceedTopayStyles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{zIndex: 10, left: 20}}>
          <Icon2 name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '85%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {data.title}
          </Text>
          <Text style={ProceedTopayStyles.subtitle}>
            In Theaters December 22, 2021
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={ProceedTopayStyles.scrollContainer}
        showsHorizontalScrollIndicator={true}
        style={{scrollbarColor: 'red', scrollbarWidth: 5}}>
        <ScrollView
          contentContainerStyle={ProceedTopayStyles.seatMap}
          style={{scrollbarColor: 'red', scrollbarWidth: 5}}
          showsHorizontalScrollIndicator={true}>
          {seats.map((row, rowIndex) => (
            <View key={rowIndex} style={ProceedTopayStyles.row}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginRight: 10,
                  color: '#333',
                  marginLeft: -Width / 40,
                }}>
                {rowIndex + 1}
              </Text>
              {row.map(seat => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    ProceedTopayStyles.seat,
                    {
                      backgroundColor: seat.selected
                        ? seatTypes.selected
                        : seatTypes[seat.type],
                    },
                  ]}
                  onPress={() => toggleSeatSelection(seat.row, seat.col)}
                  disabled={seat.type === 'unavailable'}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={ProceedTopayStyles.summary}>
        <View style={ProceedTopayStyles.legend}>
          <View style={ProceedTopayStyles.legendItem}>
            <View
              style={[ProceedTopayStyles.legendBox, {backgroundColor: 'gold'}]}
            />
            <Text style={{color: 'black', left: -Width / 10}}>Selected</Text>
            <View
              style={[
                ProceedTopayStyles.legendBox,
                {backgroundColor: 'lightgray'},
              ]}
            />
            <Text style={{color: 'black', left: -Width / 10}}>
              Not available
            </Text>
          </View>

          <View
            style={[
              {
                top: Height / 30,
                marginTop: Height / 30,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: Height / 23,
              },
            ]}>
            <View
              style={[
                ProceedTopayStyles.legendBox,
                {backgroundColor: 'skyblue', marginLeft: Width / 16},
              ]}
            />
            <Text style={{color: 'black', left: -Width / 15}}>
              Regular ($50)
            </Text>
            <View
              style={[
                ProceedTopayStyles.legendBox,
                {backgroundColor: 'purple', marginLeft: 0},
              ]}
            />
            <Text style={{color: 'black', left: -Width / 15}}> VIP ($150)</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            ProceedTopayStyles.payButton,
            {
              marginLeft: -Width / 1.65,
              width: Width / 3.8,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              backgroundColor: '#A6A6A61A',
            },
          ]}>
          <Text
            style={[
              ProceedTopayStyles.payText,
              {fontSize: 13, color: 'black'},
            ]}>
            4/3 row
          </Text>
          <Icon name={'cross'} size={15} color="black" />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', gap: Width / 20}}>
          <TouchableOpacity
            style={[
              ProceedTopayStyles.payButton,
              {
                marginLeft: -Width / 333,
                width: Width / 3.8,
                backgroundColor: '#A6A6A61A',
              },
            ]}>
            <Text
              style={[
                ProceedTopayStyles.payText,
                {fontSize: 13, color: 'grey'},
              ]}>
              Total Price
            </Text>
            <Text style={[ProceedTopayStyles.payText, {color: 'black'}]}>
              {totalPrice}$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ProceedTopayStyles.payButton, {width: Width / 1.8}]}>
            <Text style={ProceedTopayStyles.payText}>Proceed to Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SeatSelectionScreen;
