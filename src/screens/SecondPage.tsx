import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';

type props = {
  navigation: any
}

const SecondPage: React.FC<props> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#F3F3F3',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
            Second Page
          </Text>
          <Text style={[styles.subtitle, { color: isDarkMode ? '#CCCCCC' : '#666666' }]}>
            Running on: {Platform.OS}
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default SecondPage;
