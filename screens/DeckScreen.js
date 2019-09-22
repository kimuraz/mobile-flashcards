import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {withNavigation} from 'react-navigation';
import {deleteDeck} from '../actions';

class DeckScreen extends React.Component {
  deleteThis = () => {
    const {deck, navigation, dispatch} = this.props;

    dispatch(deleteDeck(deck.id));
    navigation.navigate('Home');
  };

  render() {
    const {deck, navigation} = this.props;
    return (
      <View center padding={20} style={styles.container}>
        {!!deck && (
          <>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cards}>{deck.cards.length} Cards</Text>

            <Button
              style={styles.quizBtn}
              onPress={() => navigation.navigate('Quiz', {cards: deck.cards})}
              label="Start Quiz"
            />
            <Button
              label="Add Card"
              onPress={() => navigation.navigate('NewCard', {deckId: deck.id})}
            />

            <Text onPress={this.deleteThis} style={styles.delete}>
              Delete
            </Text>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#2e78b7',
    fontSize: 30,
  },
  quizBtn: {
    backgroundColor: '#20F0B3',
    marginTop: 20,
    marginBottom: 20,
  },
  cards: {
    margin: 20,
    textAlign: 'center',
  },
  delete: {
    textAlign: 'center',
    marginTop: '80%',
    color: 'red',
    fontSize: 20,
  },
});

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.state.params.deckId],
});

export default withNavigation(connect(mapStateToProps)(DeckScreen));
