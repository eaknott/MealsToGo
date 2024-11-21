import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Row,
  RowRight,
  Icon,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg',
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Main Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Content>
        <RestaurantCardCover
          source={{ uri: photos[0] }}
          key={name}
        />
      </Card.Content>
      <Info>
        <Row>
          <Text variant='label'>{name}</Text>
          <Icon source={{ uri: icon }} />
        </Row>
        <Row>
          <Rating>
            {ratingArray.map(() => {
              return (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                />
              );
            })}
          </Rating>
          <RowRight>
            {isClosedTemporarily && (
              <Text variant='error'>CLOSED TEMPORARILY</Text>
            )}
            <Spacer
              position='left'
              size='medium'
            >
              {isOpenNow && (
                <SvgXml
                  xml={openIcon}
                  width={20}
                  height={20}
                />
              )}
            </Spacer>
          </RowRight>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
