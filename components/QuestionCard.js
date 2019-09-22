import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Card} from 'react-native-ui-lib';

const QuestionCard = ({card, showAnswer}) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.question}>{card.question}</Text>
      {showAnswer && <Text style={styles.answer}>Answer: {card.answer}</Text>}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  answer: {
    fontSize: 20,
    marginTop: 15,
    color: '#C6C6C6',
  },
  question: {
    fontSize: 30,
    color: '#2e78b7',
  },
});

export default QuestionCard;
