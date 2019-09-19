import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TextField, Button} from 'react-native-ui-lib';

import {addDeck} from '../actions';

class NewDeckScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      deckTitle: '',
    };
  }

  saveDeck = () => {
    const {deckTitle} = this.state;
    if (!deckTitle) {
      alert('Please, fill the deck name!');
      return;
    }

    const deck = {
      id: new Date().valueOf(),
      title: deckTitle,
      cards: [],
    };

    this.props.dispatch(addDeck(deck)).then(() => {
      alert('New deck successfully saved!');
      this.setState({deckTitle: ''}, () =>
        this.props.navigation.navigate('DeckScreen', {deckId: deck.id}),
      );
    });
  };

  render() {
    return (
      <View flex center padding={20}>
        <TextField
          title="Deck name"
          onChangeText={text => this.setState({deckTitle: text})}
          value={this.state.deck}
          placeholder="Type the name of your new deck"
        />
        <Button label="Save" onPress={this.saveDeck} />
      </View>
    );
  }
}

export default withNavigation(connect()(NewDeckScreen));
