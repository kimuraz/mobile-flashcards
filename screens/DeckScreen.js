import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {withNavigation} from 'react-navigation';

class DeckScreen extends React.Component {
  render() {
    const {deck, navigation} = this.props;
    return (
      <View flex center padding={20} style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.cards.length} Cards</Text>

        {!!deck.cards.length && <Button style={styles.quizBtn} label="Start Quiz" />}
        <Button
          label="Add Card"
          onPress={() => navigation.navigate('NewCard', {deckId: deck.id})}
        />
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
});

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.state.params.deckId],
});

export default withNavigation(connect(mapStateToProps)(DeckScreen));
