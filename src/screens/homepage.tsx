import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header';
import styles from '../styles/homepageStyles';
import homepageData from '../data/homepage';

const HomePage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const handleNavigation = (path: string) => {
    navigation.navigate(path.replace('/', ''));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{homepageData.links[0].label}</Text>
              <Text style={styles.subtitle}>
                {homepageData.links[0].description}
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            Welcome to my website. Please feel free to{' '}
            {homepageData.navigation.map((item, index) => (
              <React.Fragment key={item.path}>
                {index > 0 && (index === homepageData.navigation.length - 1 ? ' or ' : ', ')}
                <TouchableOpacity onPress={() => handleNavigation(item.path)}>
                  <Text style={styles.navLink}>{item.label}</Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
            .
          </Text>

          {homepageData.intro.map((paragraph, index) => (
            <Text key={index} style={[styles.text, styles.paragraph]}>
              {paragraph}
            </Text>
          ))}

          <View style={styles.socialLinks}>
            {homepageData.socialLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleLinkPress(link.url)}
              >
                <Text style={styles.socialLink}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => handleLinkPress('https://github.com/mldangelo/personal-site')}
          >
            <Text style={styles.sourceLink}>Source available here.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;