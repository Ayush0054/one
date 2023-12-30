import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancycard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/FySdWAQWwAAhp3J?format=png&name=360x360',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>LAKAKA</Text>
          <Text style={styles.cardLabel}>inter Milan</Text>
          <Text style={styles.cardDescription}>
            stopping teams goals,assist opponents, changes teams like clothes,{' '}
          </Text>
          <Text style={styles.cardFooter}>FRAUD</Text>
        </View>
      </View>
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
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'mintcream',
    color: '#000000',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    // shadowColor: 'red',
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
  },
  cardImage: {
    height: 180,
    // width: 200,
    marginBottom: 10,

    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flexGrow: 1,
    flex: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    marginBottom: 4,
    fontSize: 14,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
