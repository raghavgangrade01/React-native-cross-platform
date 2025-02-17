import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import aboutStyles from '../styles/aboutStyles';
import aboutData from '../data/about';
import Header from '../components/Header';

const About: React.FC<{ navigation: any }> = ({ navigation }) => {
  const wordCount = useMemo(() => {
    return aboutData
      .flatMap(section => section.content)
      .join(' ')
      .split(/\s+/)
      .filter(word => word.length > 0)
      .length;
  }, []);

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const renderListItem = (text: string, index: number) => {
    // Check if the text contains a link
    const linkMatch = text.match(/\[([^\]]+)\]\(([^)]+)\)/);
    
    if (linkMatch) {
      const [fullMatch, linkText, url] = linkMatch;
      const parts = text.split(fullMatch);
      
      return (
        <View key={index} style={aboutStyles.listItem}>
          <Text style={aboutStyles.listItemBullet}>•</Text>
          <View style={aboutStyles.listItemText}>
            <Text style={aboutStyles.paragraph}>
              {parts[0]}
              <TouchableOpacity onPress={() => handleLinkPress(url)}>
                <Text style={[aboutStyles.paragraph, aboutStyles.link]}>
                  {linkText}
                </Text>
              </TouchableOpacity>
              {parts[1]}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View key={index} style={aboutStyles.listItem}>
        <Text style={aboutStyles.listItemBullet}>•</Text>
        <Text style={[aboutStyles.paragraph, aboutStyles.listItemText]}>
          {text}
        </Text>
      </View>
    );
  };

  const renderSection = (section: typeof aboutData[0], index: number) => {
    return (
      <View key={index} style={aboutStyles.section}>
        <Text style={aboutStyles.sectionTitle}>{section.title}</Text>
        {section.type === 'list' ? (
          <View style={aboutStyles.list}>
            {section.content.map((item, idx) => renderListItem(item, idx))}
          </View>
        ) : (
          <View>
            {section.content.map((paragraph, idx) => (
              <Text key={idx} style={aboutStyles.paragraph}>
                {paragraph}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={aboutStyles.container}>
      <Header navigation={navigation} />
      <ScrollView
        style={aboutStyles.scrollView}
        contentContainerStyle={aboutStyles.post}>
        <View style={aboutStyles.header}>
          <View style={aboutStyles.titleContainer}>
            <Text style={aboutStyles.title}>About Me</Text>
            <Text style={aboutStyles.wordCount}>
              (in about {wordCount} words)
            </Text>
          </View>
        </View>
        <View style={aboutStyles.content}>
          {aboutData.map((section, index) => renderSection(section, index))}
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
