import {AsyncStorage} from 'react-native';

const KEY = '@FLASHCARDS:decks';

export const getDecks = () => {
  return AsyncStorage.getItem(KEY);
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

export const addCardToDeck = card => {
  return AsyncStorage.getItem(KEY).then(res => {
    const decks = JSON.parse(res);
    const deck = decks[card.deckId];
    deck.cards.push(card);
    AsyncStorage.mergeItem(KEY, JSON.stringify({[deck.id]: deck}));
  });
};
