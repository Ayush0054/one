import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in Javascript 21 - Es12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/2410/schoolLogo/1657573773014a.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a
            quae cum amet quam in omnis, recusandae aliquam fuga voluptatibus
            dolorem facilis delectus laudantium quidem esse facere maxime, totam
            officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, a quae cum amet quam in omnis, recusandae aliquam fuga
            voluptatibus dolorem facilis delectus laudantium quidem esse facere
            maxime, totam officiis!
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.links}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.links}>Follow Me</Text>
          </TouchableOpacity>
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
  card: {
    // width: 350,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#E07C24',
    color: '#000000',
    elevation: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
    // width: 400,
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  links: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#fff',
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 8,
    // shadowOffset: {width: 1, height: 1},
    // shadowColor: '#333',
    // shadowOpacity: 0.4,
    borderRadius: 6,
  },
});
