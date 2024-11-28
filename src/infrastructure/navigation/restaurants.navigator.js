import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../../src/features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};