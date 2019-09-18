import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {withNavigation} from 'react-navigation';

const DeckScreen = ({navigation}) => {
  const {deck} = navigation.state.params;

  return (
    <View flex center padding={20} style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{deck.cards.length} Cards</Text>

      {!!deck.cards.length && <Button label="Start Quiz" />}
      <Button
        label="Add Card"
        onPress={() => navigation.navigate('NewCard', {deckId: deck.id})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#2e78b7',
    fontSize: 30,
  },
  cards: {
    margin: 20,
    textAlign: 'center',
  },
});

export default withNavigation(DeckScreen);
