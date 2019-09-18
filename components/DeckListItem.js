import React from 'react';
import {withNavigation} from 'react-navigation';
import {StyleSheet, View} from 'react-native';
import {ListItem, Text} from 'react-native-ui-lib';

const DeckListItem = ({deck, navigation}) => (
  <View style={styles.listContainer} height={78}>
    <ListItem
      style={styles.deckList}
      onPress={() => navigation.navigate('DeckScreen', {deck})}>
      <ListItem.Part left numberOfLines={1}>
        <Text color="#fff">{deck.title}</Text>

        <Text color="#fff"> ({deck.cards.length} Cards)</Text>
      </ListItem.Part>
    </ListItem>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 5,
  },
  deckList: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#2e78b7',
  },
});

export default withNavigation(DeckListItem);
