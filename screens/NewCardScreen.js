import React from 'react';
import {View} from 'react-native';
import {TextField, Button} from 'react-native-ui-lib';

import {addCard} from '../actions'; 

class NewCardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deckId: props.navigation.state.params.deckId,
      question: '',
      answer: '',
    };
  }

  saveCard = () => {
    const {question, answer} = this.state;
    if (question && answer) {
      addCard(this.state);
      return;
    }
    alert('Fill all the fields!');
  };

  render() {
    return (
      <View flex center padding={20}>
        <TextField
          title="Question"
          onChangeText={text => this.setState({question: text})}
          placeholder="Type this card's question"
        />

        <TextField
          title="Answer"
          onChangeText={text => this.setState({answer: text})}
          placeholder="What's the answer?"
        />

        <Button label="Save" onPress={this.saveCard} />
      </View>
    );
  }
}

export default NewCardScreen;
