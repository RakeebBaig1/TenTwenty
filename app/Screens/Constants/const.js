export const movies1 = [
    {
      id: '1',
      title: 'Free Guy',
      image: require('../../Assets/freeGuy.jpeg'),
    },
    {
      id: '2',
      title: "The King's Man",
      image: require('../../Assets/kingsman.jpeg'),
    },
    {
      id: '3',
      title: 'Jojo Rabbit',
      image: require('../../Assets/jojorabbit.jpeg'),
    },
    {
      id: '4',
      title: 'Comedies',
      image: require('../../Assets/comedy.jpeg'),
    },
    {
      id: '5',
      title: 'Crime',
      image: require('../../Assets/crime.jpeg'),
    },
    {
      id: '6',
      title: 'Daramas',
      image: require('../../Assets/daramas.jpeg'),
    },
    {
      id: '7',
      title: 'Documentary',
      image: require('../../Assets/documentary.jpeg'),
    },
    {
      id: '8',
      title: 'Family',
      image: require('../../Assets/family.jpeg'),
    },
    {
      id: '9',
      title: 'Fantasy',
      image: require('../../Assets/fantasy.jpeg'),
    },
    {
      id: '10',
      title: 'Free Guy',
      image: require('../../Assets/freeGuy.jpeg'),
    },
    {
      id: '11',
      title: 'Holiday',
      image: require('../../Assets/holidays.jpeg'),
    },
    {
      id: '12',
      title: 'Horror',
      image: require('../../Assets/horror.jpeg'),
    },
  ];

 export  const rows = 10;
 export  const cols = 14;
 export const seatTypes = {
    available: 'gray',
    selected: 'gold',
    regular: 'skyblue',
    vip: 'purple',
    unavailable: 'lightgray',
  };
  
 export  const seatPrices = {
    regular: 50,
    vip: 150,
  };
  export const dates = ["5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar"];
  export const showtimes = [
    { time: "12:30", hall: "Cinetech + Hall 1", price: "50$", bonus: "2500", selected: true },
    { time: "13:30", hall: "Cinetech", price: "75$", bonus: "3000", selected: false },
  ];