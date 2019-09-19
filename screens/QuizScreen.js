import React from 'react';
import {StyleSheet, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Text, Button} from 'react-native-ui-lib';

import QuestionCard from '../components/QuestionCard';

class QuizScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      shuffledCards: [],
      answers: [],
    };
  }

  _shuffleCardsAndAnswers = () => {
    const {cards} = this.props.navigation.state.params;

    !!cards && this.setState({
      shuffledCards: cards.sort(() => Math.random() - 0.5),
      answers: cards.map(c => c.answer).sort(() => Math.random() - 0.5),
    });
  };

  componentDidMount() {
    this._shuffleCardsAndAnswers();
  }

  render() {
    const {navigation} = this.props;
    const {cards} = this.props.navigation.state.params;
    console.log(cards.length);

    return (
      <View center flex padding={20}>
        {cards.length < 2 ? (
          <Text>Sorry, please create at least 2 cards to start the quiz!</Text>
        ) : (
          <View>
            <Button label="👍 Correct" />

            <Button label="👎 Incorrect" />

            <Button label="👀 Check answer" />
            <QuestionCard />
          </View>
        )}
      </View>
    );
  }
}
export default withNavigation(QuizScreen);
