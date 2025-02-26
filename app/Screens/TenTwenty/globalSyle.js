import {
    StyleSheet,
  } from 'react-native';
import { Width,Height } from '../../Navigation/config';

export const TicketStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EFEFEF",
      paddingHorizontal: 20,
      paddingTop: 0,
    },
    header: {
      marginLeft:-20,
      height:Height/7,
      width:Width,
      backgroundColor:'white',
      flexDirection: "row",
      alignItems: "center",
     // justifyContent: "center",
      marginBottom: 0,
      
    },
    backButton: {
      fontSize: 24,
      marginRight: 20,
      color:'black',
    //  position:'absolute',
     // left:-Width/6
    },
    movieTitle: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 14,
      color: "#61C3F2",
      textAlign: "center",
    },
    sectionTitle: {
      marginTop:Height/10,
      fontSize: 16,
      color:'black',
      fontWeight: "bold",
      marginVertical: 10,
    },
    dateContainer: {
      marginTop:Height/60,
      flexDirection: "row",
      marginBottom: 20,
    },
    dateButton: {
      backgroundColor: "#E8E8E8",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      marginRight: 10,
    },
    selectedDate: {
      backgroundColor: "#61C3F2",
    },
    dateText: {
      fontSize: 14,
      color: "#000",
    },
    selectedDateText: {
      color: "#fff",
      fontWeight: "bold",
    },
    showtimeCard: {
      backgroundColor: "#FFF",
      padding: 15,
      borderRadius: 10,
      marginRight: 15,
      borderWidth: 1,
      borderColor: "#DDD",
      width: Width/1.4,
      alignItems: "center",
      height:Height/4,
      marginTop: 10,
      marginBottom : 10,
      
    },
    selectedShowtime: {
      borderColor: "#48A6F2",
    },
    showtimeText: {
      color:'black',
      fontSize: 16,
      fontWeight: "bold",
    },
    hallText: {
      padding:6,
      fontSize: 14,
      color: "#888",
      marginBottom: 20,
    },
    seatMap: {
      width: '70%',
      height: '90%',
      backgroundColor: "#E8E8E8",
      borderRadius: 5,
      marginBottom: 10,
    },
    priceText: {
      fontSize: 14,
      color: "#555",
    },
    bold: {
      fontWeight:"900",
      color:'black',
    },
    selectButton: {
      backgroundColor: "#61C3F2",
      paddingVertical: 15,
      alignItems: "center",
      borderRadius: 10,
      marginTop: 20,
      bottom:Height/40
    },
    selectButtonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });


export const ProceedTopayStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      // paddingTop: 40,
      paddingHorizontal: 10,
    },
    BottomView :{
        top: Height / 30,
        marginTop: Height / 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: Height / 23,
      },
    Header : {
        marginLeft: -20,
        height: Height / 7,
        width: Width,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
      },
    title: {
      fontSize: 22,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      textAlign: 'center',
      color: '#61C3F2',
      marginBottom: 20,
    },
    screenContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    screenText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'gray',
    },
    scrollContainer: {
      flexGrow: 1,
      marginTop: -Height / 44,
      alignItems: 'center',
    },
    seatMap: {
      padding: 10,
      borderRadius: 10,
      // backgroundColor: "#ffffff",
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    seat: {
      width: 18,
      height: 18,
      margin: 4,
      borderRadius: 4,
    },
    legend: {
      flexDirection: 'column',
      //justifyContent: "space-around",
      marginVertical: 10,
    },
    legendItem: {
      top: Height / 30,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
      legendBox: {
      backgroundColor: 'purple',
      marginLeft: 0,
      width: 20,
      height: 20,
      marginRight: 0,
      borderRadius: 5,
    },
    summary: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderColor: '#ddd',
      height: '40%',
      marginLeft: -20,
    },
    totalPrice: {
      bottom: Height / 20,
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    payButton: {
        marginLeft: -Width / 333,
        width: Width / 3.8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#50b6f5',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    payText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });



export const DescriptionStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    overViewContainer : {
        width: Width * 0.9,
        height: 1, //
        backgroundColor: 'lightgray',
        alignSelf: 'center',
        marginVertical: 10, 
        bottom: 0,
      },
    imageBackground: {
      width: "100%",
      height: Height / 1.8,
      justifyContent: "flex-end",
      paddingBottom: 20,
    },
    backButton: {
      position: "absolute",
      top: 50,
      left: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    watchText: {
      color: "white",
      fontSize: 18,
      marginLeft: 5,
      fontWeight: "bold",
    },
    overlay: {
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      padding: 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: "white",
    },
    date: {
      color: "white",
      fontSize: 12,
      marginVertical: 8,
      fontWeight: "bold",
    },
    ticketButton: {
      backgroundColor: "#61C3F2",
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 10,
      width:Width/1.5,
      marginTop: 10,
      alignItems: "center",
      height:Height/16,
      justifyContent:'center',
    },
    ticketText: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
    trailerButton: {
      height:Height/16,
      width:Width/1.5,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "white",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent:'center',
      marginTop: 10,
    },
    trailerText: {
      color: "white",
      fontSize: 16,
      marginLeft: 5,
    },
    section: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color:'black',
    },
    genreContainer: {
  
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: Height/30,
    },
    genreBadge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      marginRight: 8,
      marginBottom: 8,
    },
    genreText: {
      color: "white",
      fontWeight: "bold",
    },
    overviewText: {
      fontSize: 14,
      color: "#7A7A7A",
      marginTop: 8,
      lineHeight: 20,
    },
  });


  export const Dashboardstyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    notExpandContainer : {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: Width / 1.7,
        alignContent: 'center',
        justifyContent: 'center',
      },
    searchMoviesInput : 
        {
            color: 'black',
            flex: 1,
            width: '70%',
            paddingLeft: 3,
            top: 5,
            borderWidth: 0,
            borderColor: 'black',
          },
    isExpandContainer : {
        width: Width / 1.15,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      },
    title : {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
    topResults : {
        width: Width * 0.9, // 80% of screen width
        height: 1, // 1px height
        backgroundColor: 'lightgray', // Gray color
        alignSelf: 'center', // Center it horizontally
        marginVertical: -10,
        bottom: Height / 50,
        // Add spacing above & below
      },
    search : {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
        padding: 25,
      },
    Dashoardcc1 :{
        height: Height / 10,
        backgroundColor: 'white',
        width: Width,
        flexDirection: 'row',
        alignItems: 'center',

        alignContent: 'center',
        justifyContent: 'center',
      },
    searchWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: "#F2F2F2",
      paddingHorizontal: 0,
      height: Height / 14,
      overflow: 'hidden',
      width: Width,
    },
    searchIcon: {
      padding: 10,
      marginLeft: Width / 111.5,
    },
    input: {
      color: 'black',
      backgroundColor: 'black',
      flex: 1,
      paddingLeft: 3,
      top: 5,
      borderWidth: 2,
      borderColor: 'black',
    },
  });