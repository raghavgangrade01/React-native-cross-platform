/**
 * Cross-platform React Native App
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Platform } from 'react-native';

import HomePage from './src/screens/homepage';
import About from './src/screens/about';
import Resume from './src/screens/resume';
import Projects from './src/screens/projects';
import Stats from './src/screens/stats';
import Contact from './src/screens/contact';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Profile from './src/screens/profile';
import routes from './src/data/routes';



const Stack = createNativeStackNavigator();

// Screen mapping object
const screens: { [key: string]: React.FC<{ navigation: any }> } = {
  '': HomePage,
  about: About,
  resume: Resume,
  projects: Projects,
  stats: Stats,
  contact: Contact,
  login: Login,
  signup: Signup,
  profile: Profile,
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.content}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomePage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="login" 
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="signup" 
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="profile" 
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            {routes
              .filter(route => !route.index)
              .map(route => {
                const Screen = screens[route.path.replace('/', '')];
                return (
                  <Stack.Screen
                    key={route.path}
                    name={route.path.replace('/', '')}
                    component={Screen}
                    options={{
                      headerShown: false,
                    }}
                  />
                );
              })}
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default App;
