/**
 * Cross-platform React Native App
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#F3F3F3',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      {Platform.OS !== 'web' && (
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
            Running on: {Platform.OS}
          </Text>
          <Text style={[styles.subtitle, { color: isDarkMode ? '#CCCCCC' : '#666666' }]}>
            Cross-platform App
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Go to Second Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
               backgroundColor: '#007AFF',
             },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
        <Stack.Screen 
          name="Second" 
          component={require('./src/screens/SecondPage').default}
          options={{
            title: 'Second Page',
            headerShown: Platform.select({
              web: false,
              default: true
            }),
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    padding: Platform.OS === 'web' ? 40 : 20,
    alignItems: 'center',
    maxWidth: Platform.OS === 'web' ? 800 : '100%',
    width: '100%',
    marginHorizontal: Platform.OS === 'web' ? 'auto' : undefined,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 32 : 24,
    fontWeight: 'bold',
    marginBottom: 8,
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: Platform.OS === 'web' ? 24 : 16,
    width: '100%',
    ...Platform.select({
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      default: {
        elevation: 4,
      },
    }),
  },
  cardTitle: {
    fontSize: Platform.OS === 'web' ? 24 : 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
  },
  cardText: {
    fontSize: Platform.OS === 'web' ? 16 : 14,
    color: '#666666',
    lineHeight: Platform.OS === 'web' ? 24 : 20,
  },
});

export default App;
