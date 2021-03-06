import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CharactersList from '../pages/CharactersList/index';
import FavoriteCharactersList from '../pages/FavoriteCharactersList/index';
import AppInfo from '../pages/AppInfo';
import { useTheme } from '../hooks/Theme';

const MainTab = createMaterialBottomTabNavigator();
const CharactersListStackNavigator = createStackNavigator();
const FavoritesCharactersListStackNavigator = createStackNavigator();
const InfoStackNavigator = createStackNavigator();

type NavigationHeaderProps = {
  tintColor?: string | undefined;
};

type TabProps = {
  focused: boolean;
  color: string;
};

const CharactersListStack: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <CharactersListStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerRight: ({ tintColor }: NavigationHeaderProps) => (
          <TouchableOpacity onPress={() => toggleTheme()}>
            <Icon
              name={theme.dark ? 'sun' : 'moon'}
              size={20}
              color={tintColor}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <CharactersListStackNavigator.Screen
        name="Characters"
        component={CharactersList}
        options={{ headerTitle: 'Characters' }}
      />
    </CharactersListStackNavigator.Navigator>
  );
};

const FavoritesCharactersListStack: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <FavoritesCharactersListStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerRight: ({ tintColor }: NavigationHeaderProps) => (
          <TouchableOpacity onPress={() => toggleTheme()}>
            <Icon
              name={theme.dark ? 'sun' : 'moon'}
              size={20}
              color={tintColor}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <CharactersListStackNavigator.Screen
        name="Favorites"
        component={FavoriteCharactersList}
        options={{ headerTitle: 'Favorites' }}
      />
    </FavoritesCharactersListStackNavigator.Navigator>
  );
};

const AppInfoStack: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <InfoStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerRight: ({ tintColor }: NavigationHeaderProps) => (
          <TouchableOpacity onPress={() => toggleTheme()}>
            <Icon
              name={theme.dark ? 'sun' : 'moon'}
              size={20}
              color={tintColor}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <CharactersListStackNavigator.Screen
        name="AppInfo"
        component={AppInfo}
        options={{ headerTitle: 'About' }}
      />
    </InfoStackNavigator.Navigator>
  );
};

export const MainBottomNavigationBar: React.FC = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <MainTab.Navigator
        initialRouteName="Main"
        shifting={!!1}
        sceneAnimationEnabled={false}
        backBehavior="none"
      >
        <MainTab.Screen
          name="Characters"
          component={CharactersListStack}
          options={{
            tabBarLabel: 'Characters',
            tabBarIcon: ({ color }: TabProps) => (
              <Icon name="list" color={color} size={24} />
            ),
          }}
        />
        <MainTab.Screen
          name="Favorites"
          component={FavoritesCharactersListStack}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color }: TabProps) => (
              <Icon name="star" color={color} size={24} />
            ),
          }}
        />
        <MainTab.Screen
          name="AppInfo"
          component={AppInfoStack}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }: TabProps) => (
              <Icon name="info" color={color} size={24} />
            ),
          }}
        />
      </MainTab.Navigator>
    </>
  );
};