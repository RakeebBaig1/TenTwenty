import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {DescriptionStyles} from './globalSyle';

const MovieDetailsScreen = ({navigation, route}) => {
  const {data} = route.params;

  return (
    <ScrollView style={DescriptionStyles.container}>
      <ImageBackground
        source={data.image}
        style={DescriptionStyles.imageBackground}>
        <TouchableOpacity
          style={DescriptionStyles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon2 name="chevron-back" size={30} color="white" />
          <Text style={DescriptionStyles.watchText}>Watch</Text>
        </TouchableOpacity>

        <View style={DescriptionStyles.overlay}>
          <Text style={DescriptionStyles.title}>{data.title}</Text>
          <Text style={DescriptionStyles.date}>
            In Theaters December 22, 2021
          </Text>

          <TouchableOpacity
            style={DescriptionStyles.ticketButton}
            onPress={() => {
              navigation.navigate('Booking', {
                data: data,
              });
            }}>
            <Text style={DescriptionStyles.ticketText}>Get Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={DescriptionStyles.trailerButton}>
            <Icon2 name="play" size={16} color="white" />
            <Text style={DescriptionStyles.trailerText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={DescriptionStyles.section}>
        <Text style={DescriptionStyles.sectionTitle}>Genres</Text>
        <View style={DescriptionStyles.genreContainer}>
          {['Action', 'Thriller', 'Science', 'Fiction'].map((genre, index) => (
            <View
              key={index}
              style={[
                DescriptionStyles.genreBadge,
                {backgroundColor: genreColors[index]},
              ]}>
              <Text style={DescriptionStyles.genreText}>{genre}</Text>
            </View>
          ))}
        </View>
        <View
          style={DescriptionStyles.overViewContainer}
        />
      </View>

      <View style={DescriptionStyles.section}>
        <Text style={DescriptionStyles.sectionTitle}>Overview</Text>
        <Text style={DescriptionStyles.overviewText}>
          As a collection of history's worst tyrants and criminal masterminds
          gather to plot a war to wipe out millions, one man must race against
          time to stop them. Discover the origins of the very first independent
          intelligence agency in The King's Man. to wipe out millions, one man
          must race against time to stop them. Discover the origins of the very
          first independent intelligence agency in The King's Man.
        </Text>
      </View>
    </ScrollView>
  );
};

// Colors for genre badges
const genreColors = ['#16D19A', '#E14E94', '#725FFF', '#C9A020'];

export default MovieDetailsScreen;
