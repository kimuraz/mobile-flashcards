import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import DeckScreen from '../screens/DeckScreen';
import NewCardScreen from '../screens/NewCardScreen';
import QuizScreen from '../screens/QuizScreen';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    NewDeck: NewDeckScreen,
    NewCard: NewCardScreen,
    Quiz: QuizScreen,
    DeckScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
    />
  ),
};

HomeStack.path = '';

const NewDeckStack = createStackNavigator(
  {
    NewDeck: NewDeckScreen,
  },
  config,
);

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  ),
};

NewDeckStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NewDeckStack,
});

tabNavigator.path = '';

export default tabNavigator;
