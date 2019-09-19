import {LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD} from './types';
import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  removeDeck,
} from '../utils/storage';

export const loadDecks = () => dispatch => {
  return getDecks().then(dbDecks => {
    return dispatch({type: LOAD_DECKS, decks: JSON.parse(dbDecks)});
  });
};

export const addDeck = deck => dispatch => {
  return saveDeckTitle(deck).then(() => {
    return dispatch({type: ADD_DECK, deck});
  });
};

export const deleteDeck = deckId => dispatch => {
  return removeDeck(deckId).then(() => dispatch({type: DELETE_DECK, deckId}));
};

export const addCard = card => dispatch => {
  return addCardToDeck(card).then(() => dispatch({type: ADD_CARD, card}));
};
