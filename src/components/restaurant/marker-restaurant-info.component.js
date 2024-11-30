import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../typography/text.component';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

const MarkerImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const MarkerWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const MarkerRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? MarkerWebview : MarkerImage;

  return (
    <Item>
      <MarkerImage source={{ uri: restaurant.photos[0] }} />
      <Text
        center
        variant='caption'
        numberOfLines={3}
      >
        {restaurant.name}
      </Text>
    </Item>
  );
};
