import {LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD} from '../actions/types';

const decks = (state = {}, action) => {
  switch (action.types) {
    case LOAD_DECKS:
      return {...decks};
    case ADD_DECK:
      return {...state, [action.deck.id]: {...action.deck}};
    case DELETE_DECK:
      const decks = {...state};
      delete decks[action.deck.id];
      return {...decks};
    case ADD_CARD:
      return {
        ...state,
        [action.card.deckId]: {
          ...state[action.card.deckId],
          cards: [...state[action.card.deckId].cards, action.card],
        },
      };
    default:
      return state;
  }
};

export default decks;