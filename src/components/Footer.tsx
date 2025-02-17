import React from 'react';
import { View, Text, TouchableOpacity, Platform, Linking } from 'react-native';
import footerStyles from '../styles/footerStyles';

interface FooterLink {
  label: string;
  url: string;
}

const links: FooterLink[] = [
  {
    label: 'Github',
    url: 'https://github.com/mldangelo',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/md',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/dangelosaurus/',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mldangelo',
  },
  {
    label: 'Angel List',
    url: 'https://angel.co/michael-d-angelo',
  },
  {
    label: 'Email',
    url: 'mailto:michael.l.dangelo@gmail.com',
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={footerStyles.container}>
      <View style={footerStyles.content}>
        <View>
          <Text style={footerStyles.copyright}>
            {currentYear} Name 
          </Text>
          <TouchableOpacity 
            onPress={() => handleLinkPress('https://github.com/mldangelo/personal-site')}
          >
            <Text style={footerStyles.sourceLink}>Source code available here</Text>
          </TouchableOpacity>
        </View>

        <View style={footerStyles.linksContainer}>
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 && (
                <Text style={footerStyles.separator}>|</Text>
              )}
              <TouchableOpacity onPress={() => handleLinkPress(link.url)}>
                <Text style={footerStyles.link}>{link.label}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Footer;
