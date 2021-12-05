import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import StoreCard from './StoreCard';
import store_data from './store_data';

const App = () => {
  const renderStore = ({item}) => <StoreCard store_data={item} />;
  const keyStore = item => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PATIKASTORE </Text>
      <TextInput style={styles.searchInput} placeholder="Ara..." />

      <FlatList
        numColumns={2}
        columnWrapperStyle
        data={store_data}
        renderItem={renderStore}
        keyExtractor={keyStore}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 3,
    marginHorizontal: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'purple',
  },
  searchInput: {
    borderWidth: 1,
    backgroundColor: 'rgb(236,239,241)',
    margin: 10,
    borderRadius: 10,
    borderColor: 'rgb(236,239,241)',
    padding: 15,
  },
});

export default App;
