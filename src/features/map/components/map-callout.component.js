import React from 'react';
import styled from 'styled-components/native';
import { MarkerRestaurantInfo } from '../../../components/restaurant/marker-restaurant-info.component';

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return <MarkerRestaurantInfo restaurant={restaurant} />;
};
