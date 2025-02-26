//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Dashboardstyles} from './globalSyle';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Height, Width} from '../../Navigation/config';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { movies1 } from '../Constants/const';

export const Dashboard = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const width1 = useSharedValue(0); 
  const [columns, setColumns] = useState(1);
  const [movies, set_Movies] = useState(movies1);

  const handleInputChange = text => {
    setSearchText(text);
    let filteredMovies = movies1.filter(
      movie => movie.title.toLowerCase().includes(searchText.toLowerCase()), 
    );
    set_Movies(filteredMovies);
  };
  const expandSearch = () => {
    setIsExpanded(true);
    width1.value = withTiming(Width / 1.15, {duration: 300}); 
    toggleColumns();
  };
  const toggleColumns = () => {
    setColumns(columns === 1 ? 2 : 1); 
  };

  const shrinkSearch = () => {
    setIsExpanded(false);
    width1.value = withTiming(0, {duration: 300});
    toggleColumns();
    set_Movies(movies1);
  };
  const animatedStyle = useAnimatedStyle(() => ({
    width: width1.value,
  }));

  return (
    <View style={{backgroundColor: '#EFEFEF', height: Height / 1.09}}>
      <View style={Dashboardstyles.Dashoardcc1}>
        <Animated.View
          style={[
            Dashboardstyles.searchWrapper,
            animatedStyle,
            {width: width1},
          ]}>
          {isExpanded && (
            <View
              style={Dashboardstyles.isExpandContainer}>
              <TextInput
                placeholder="Search..."
                value={searchText} 
                onChangeText={handleInputChange} 
                placeholderTextColor={'black'}
                style={Dashboardstyles.searchMoviesInput}
                autoFocus
              />

              <TouchableOpacity
                onPress={shrinkSearch}
                style={{paddingTop: Height / 70, marginLeft: Width / 111.5}}>
                <Icon name={'cross'} size={22} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
        {!isExpanded && (
          <View
            style={Dashboardstyles.notExpandContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: Width / 20,
              }}>
              Watch
            </Text>
            <TouchableOpacity
              onPress={expandSearch}
              style={{
                paddingLeft: Width / 14,
                marginLeft: 0,
                width: Width / 5,
                height: 60,
                justifyContent: 'center',
              }}>
              <Icon2 name={'search1'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {searchText != '' && (
        <>
          <Text style={Dashboardstyles.search}>Top Results</Text>
          <View style={Dashboardstyles.topResults} />
        </>
      )}

      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        numColumns={columns}
        key={columns}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              marginHorizontal: Height / 50,
              paddingTop: Height / 50,
              flex: 1,
            }}
            onPress={() => {
              props.navigation.navigate('description', {
                data: item,
              });
            }}>
            <Image
              source={item.image}
              style={{width: '100%', height: Height / 4, borderRadius: 10}}
            />
            <Text style={Dashboardstyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
