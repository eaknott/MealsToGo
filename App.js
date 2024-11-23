import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utility/safe-area.component';
import { Ionicons } from '@expo/vector-icons';

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
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
              component={RestaurantsScreen}
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
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
