import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    borderRadius: 2,
    backgroundColor: 'rgb(236,239,241)',
  },
  inner_container: {
    padding: 3,
    alignSelf: 'flex-start',
  },
  image_container: {
    height: Dimensions.get('window').height / 5,
    borderRadius: 5,
    width: '100%',
    margin: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  image: {
    height: 100,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    marginTop: 5,
    fontSize: 15,
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});
