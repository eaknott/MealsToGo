import React from 'react';
import styled from 'styled-components/native';
import { Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RowRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

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
          <Title>{name}</Title>
          <Image
            style={{ width: 15, height: 15 }}
            source={{ uri: icon }}
          />
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
              <Text
                variant='label'
                style={{ color: 'red' }}
              >
                CLOSED TEMPORARILY
              </Text>
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
