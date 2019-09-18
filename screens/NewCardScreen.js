import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {TextField, Button} from 'react-native-ui-lib';

import {addCard} from '../actions'; 

class NewCardScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.navigation.state);

    this.state = {
      deckId: props.navigation.state.params.deckId,
      question: '',
      answer: '',
    };
  }

  saveCard = () => {
    const {question, answer} = this.state;
    if (question && answer) {
      this.props.dispatch(addCard(this.state));
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

export default connect()(NewCardScreen);
