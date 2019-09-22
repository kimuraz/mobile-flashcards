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
      quizStep: 0,
      countCorrect: 0,
      showAnswer: false,
    };
  }

  _shuffleCardsAndAnswers = () => {
    const {cards} = this.props.navigation.state.params;

    !!cards &&
      this.setState({
        shuffledCards: cards.sort(() => Math.random() - 0.5),
      });
  };

  componentDidMount() {
    this._shuffleCardsAndAnswers();
  }

  _showAnswer = () => {
    this.setState({showAnswer: true});
  };

  _countCorrect = () => {
    this.setState(
      {
        countCorrect: this.state.countCorrect + 1,
        quizStep: this.state.quizStep + 1,
        showAnswer: false,
      },
      this._checkEnd,
    );
  };

  _countInconrrect = () => {
    this.setState(
      {
        quizStep: this.state.quizStep + 1,
        showAnswer: false,
      },
      this._checkEnd,
    );
  };

  _checkEnd = () => {
    const {
      navigation: {replace},
    } = this.props;
    const {countCorrect, quizStep} = this.state;
    const {cards} = this.props.navigation.state.params;
    this.state.quizStep >= cards.length &&
      replace('EndQuiz', {
        score: ((countCorrect / quizStep) * 100).toFixed(2),
      });
  };

  render() {
    const {navigation} = this.props;
    const {cards} = this.props.navigation.state.params;
    const {shuffledCards, quizStep, showAnswer, countCorrect} = this.state;

    return (
      <View center padding={20}>
        {cards.length < 1 ? (
          <Text>Sorry, please create at least 1 card to start the quiz!</Text>
        ) : (
          <View>
            {!!shuffledCards[quizStep] && (
              <>
                <QuestionCard
                  card={shuffledCards[quizStep]}
                  showAnswer={showAnswer}
                />
                <Button
                  style={styles.btn}
                  onPress={this._showAnswer}
                  label="👀 Check answer"
                />

                <Button
                  style={[styles.btn, styles.correct]}
                  label="👍 Correct"
                  onPress={this._countCorrect}
                />

                <Button
                  style={[styles.btn, styles.incorrect]}
                  onPress={this._countInconrrect}
                  label="👎 Incorrect"
                />

                <Text>
                  Answered: {quizStep} - Correct:{' '}
                  {(countCorrect / (quizStep + 1 - countCorrect)) * 100} %
                </Text>
              </>
            )}
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
  correct: {
    backgroundColor: '#00C823',
  },
  incorrect: {
    backgroundColor: '#C60E00',
  },
});
export default withNavigation(QuizScreen);
