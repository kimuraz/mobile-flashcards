import {LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD} from './types';
import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  removeDeck,
} from '../utils/storage';

export const loadDecks = () => dispatch => {
  return getDecks().then(loadedDecks => dispatch({type: LOAD_DECKS, decks}));
};

export const addDeck = deck => dispatch => {
  return saveDeckTitle(deck).then(savedDeck =>
    dispatch({type: ADD_DECK, deck: savedDeck}),
  );
};

export const deleteDeck = deckId => dispatch => {
  return deleteDeck().then(() => dispatch({type: DELETE_DECK, deckId}));
};

export const addCard = card => dispatch => {
  return addCardToDeck(card).then(card => dispatch({type: ADD_CARD, card}));
};
