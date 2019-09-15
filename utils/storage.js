import {AsyncStorage} from 'react-native';

const KEY = '@FLASHCARDS:decks';

export const getDecks = () => {
  return AsyncStorage.getItem(KEY).then(res => JSON.parse(res));
};

export const removeDeck = id => {
  return AsyncStorage.getItem(KEY).then(res => {
    const decks = JSON.parse(res);
    decks[id] = undefined;
    delete decks[id];
    AsyncStorage.setItem(KEY, JSON.stringify(decks));
  });
};

export const saveDeckTitle = deck => {
  return AsyncStorage.mergeItem(KEY, JSON.stringify({[deck.id]: deck}));
};

export const addCardToDeck = (card, deckId) => {
  return AsyncStorage.getItem(KEY).then(res => {
    const decks = JSON.parse(res);
    decks[deckId].cards.concat(card);
    AsyncStorage.setItem(KEY, JSON.stringify(decks));
  });
};
