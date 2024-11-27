import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder='search' />
      </SearchView>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
