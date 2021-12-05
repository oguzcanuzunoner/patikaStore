import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './StoreCard.styles';

const StoreCard = ({store_data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: store_data.imgURL,
          }}
        />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{store_data.title}</Text>
        <Text style={styles.price}>{store_data.price}</Text>
        <Text style={styles.inStock}>
          {store_data.inStock === false ? 'STOKTA YOK' : ''}
        </Text>
      </View>
    </View>
  );
};

export default StoreCard;
