import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../../src/features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../../src/features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode='none'
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
