import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';

import dayjs from 'dayjs';

import {Notifications} from 'expo';

class EndQuizScreen extends React.Component {
  componentDidMount() {
    this._dismissNextNotification().then(() => {
      this._scheduleTomorrow();
    });
  }

  _dismissNextNotification = () => {
    return Notifications.cancelAllScheduledNotificationsAsync();
  };

  _scheduleTomorrow = async () => {
    let notificationId = Notifications.scheduleLocalNotificationAsync(
      {
        title: 'Flashcards',
        body: 'Keep learning with your decks!',
      },
      {
        time: dayjs()
          .startOf('day')
          .add(36, 'hour')
          .toDate(),
      },
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Congrats for finishing this quizz!</Text>
        <Text style={styles.text}>
          You got {navigation.state.params.score} % of the answers correct!
        </Text>
        <Button
          onPress={() => navigation.replace('Home')}
          style={styles.btn}
          label="Go back home!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
  },
});

export default withNavigation(EndQuizScreen);
