import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RowRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
