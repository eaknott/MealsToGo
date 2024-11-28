import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeArea } from '../../../src/components/utility/safe-area.component';
import { Text } from 'react-native';
import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings-sharp',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = 'restaurant';
            } else if (route.name === 'Settings') {
              iconName = 'settings-sharp';
            } else if (route.name === 'Map') {
              iconName = 'map';
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Restaurants'
          component={RestaurantsNavigator}
        />
        <Tab.Screen
          name='Map'
          component={Map}
        />
        <Tab.Screen
          name='Settings'
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
