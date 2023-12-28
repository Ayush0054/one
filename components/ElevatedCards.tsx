import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlastCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#EF5376',
    elevation: 10,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'red',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
