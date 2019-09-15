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

    this.props.dispatch(
      addDeck({
        id: new Date().getMilliseconds(),
        title: deckTitle,
        questions: [],
      }),
    );
    alert('New deck successfully saved!');
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View flex center padding={20}>
        <TextField
          title="Deck name"
          onChangeText={text => this.setState({deckTitle: text})}
          placeholder="Type the name of your new deck"
        />
        <Button label="Save" onPress={this.saveDeck} />
      </View>
    );
  }
}

export default withNavigation(connect()(NewDeckScreen));
