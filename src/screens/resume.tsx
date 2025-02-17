import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Header from '../components/Header';
import resumeStyles from '../styles/resumeStyles';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const Resume: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const renderIntro = () => (
    <View style={resumeStyles.intro}>
      <Text style={resumeStyles.introText}>
        I am a full-stack software engineer with expertise in React Native, TypeScript, and cloud technologies.
        I enjoy building scalable applications and solving complex problems.
      </Text>
      <TouchableOpacity
        style={resumeStyles.downloadButton}
        onPress={() => handleLinkPress('/resume.pdf')}>
        <Text style={resumeStyles.downloadButtonText}>Download Resume</Text>
      </TouchableOpacity>
    </View>
  );

  const renderEducation = () => (
    <View style={resumeStyles.section}>
      <Text style={resumeStyles.sectionTitle}>Education</Text>
      {degrees.map((degree, index) => (
        <TouchableOpacity
          key={index}
          style={resumeStyles.educationItem}
          onPress={() => handleLinkPress(degree.link)}>
          <Text style={resumeStyles.schoolName}>{degree.school}</Text>
          <Text style={resumeStyles.degree}>{degree.degree}</Text>
          <Text style={resumeStyles.year}>{degree.year}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderExperience = () => (
    <View style={resumeStyles.section}>
      <Text style={resumeStyles.sectionTitle}>Experience</Text>
      {positions.map((position, index) => (
        <TouchableOpacity
          key={index}
          style={resumeStyles.experienceItem}
          onPress={() => handleLinkPress(position.link)}>
          <Text style={resumeStyles.company}>{position.company}</Text>
          <Text style={resumeStyles.position}>{position.position}</Text>
          <Text style={resumeStyles.daterange}>{position.daterange}</Text>
          <View style={resumeStyles.bulletPoints}>
            {position.points.map((point, pointIndex) => (
              <Text key={pointIndex} style={resumeStyles.bulletPoint}>
                • {point}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderSkills = () => {
    const skillsByCategory = categories.reduce((acc, category) => {
      acc[category.name] = skills.filter(skill =>
        skill.category.includes(category.name),
      );
      return acc;
    }, {} as { [key: string]: typeof skills });

    return (
      <View style={resumeStyles.skillsSection}>
        <Text style={resumeStyles.sectionTitle}>Skills</Text>
        {categories.map((category, index) => (
          <View key={index} style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>{category.name}</Text>
            <View style={resumeStyles.skillGrid}>
              {skillsByCategory[category.name]?.map((skill, skillIndex) => (
                <View key={skillIndex} style={resumeStyles.skillItem}>
                  <Text style={resumeStyles.skillName}>{skill.title}</Text>
                  <View style={resumeStyles.skillBarContainer}>
                    <View
                      style={[
                        resumeStyles.skillBar,
                        {
                          backgroundColor: category.color,
                          width: `${(skill.competency / 5) * 100}%`,
                        },
                      ]}
                    />
                  </View>
                  <Text style={resumeStyles.skillLevel}>
                    {skill.competency}/5
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={resumeStyles.container}>
      <Header navigation={navigation} />
      <ScrollView style={resumeStyles.scrollView}>
        <View style={resumeStyles.content}>
          <View style={resumeStyles.header}>
            <Text style={resumeStyles.headerTitle}>Resume</Text>
          </View>
          {renderIntro()}
          {renderEducation()}
          {renderExperience()}
          {renderSkills()}
        </View>
      </ScrollView>
    </View>
  );
};

export default Resume;
