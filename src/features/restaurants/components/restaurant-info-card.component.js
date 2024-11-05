import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg',
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Main Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card
      elevation={5}
      style={styles.card}
    >
      <Card.Content>
        <Card.Cover
          source={{ uri: photos[0] }}
          style={styles.cover}
          key={name}
        />
      </Card.Content>
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 5,
    backgroundColor: 'white',
  },
});
