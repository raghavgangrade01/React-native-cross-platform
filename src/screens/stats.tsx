import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';

const Stats: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          { marginTop: Platform.OS === 'web' ? 70 : 0 }
        ]}>
        <Text style={styles.title}>Stats</Text>
        <Text style={styles.text}>
          This is the Stats page. Display your statistics and metrics here.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: Platform.OS === 'web' ? 40 : 20,
    maxWidth: Platform.OS === 'web' ? 800 : '100%',
    width: '100%',
    marginHorizontal: Platform.OS === 'web' ? 'auto' : undefined,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});

export default Stats;
