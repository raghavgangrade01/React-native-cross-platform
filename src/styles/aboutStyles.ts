import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const palette = {
  bg: '#ffffff',
  border: '#dedede',
  fg: '#3c3b3b',
  fgBold: '#3c3b3b',
  fgLight: '#aaaaaa',
};

const fontFamily = Platform.select({
  web: {
    fontFamily: 'Raleway, Helvetica, sans-serif',
  },
  default: {},
});

const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg,
    paddingTop: Platform.OS === 'web' ? 56 : 0,
    display: 'flex',
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
  },
  post: {
    backgroundColor: palette.bg,
    borderWidth: Platform.OS === 'web' ? 1 : 0,
    borderColor: palette.border,
    padding: 24,
    flexGrow: 1,
    ...Platform.select({
      web: {
        maxWidth: 980,
        alignSelf: 'center',
        width: '100%',
        marginHorizontal: 'auto',
      },
      default: {
        paddingHorizontal: 16,
      }
    }),
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    marginLeft: Platform.OS === 'web' ? -24 : -16,
    marginRight: Platform.OS === 'web' ? -24 : -16,
    marginBottom: 24,
    width: '100%',
    paddingHorizontal: Platform.OS === 'web' ? 24 : 16,
  },
  titleContainer: {
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    ...fontFamily,
    fontSize: Platform.OS === 'web' ? 24 : 20,
    fontWeight: '800',
    color: palette.fg,
    marginBottom: 8,
  },
  wordCount: {
    ...fontFamily,
    fontSize: 14,
    color: palette.fgLight,
  },
  content: {
    flex: 1,
    marginBottom: 24,
  },
  section: {
    marginTop: 48,
    marginBottom: 24,
  },
  sectionTitle: {
    ...fontFamily,
    fontSize: Platform.OS === 'web' ? 13 : 16,
    fontWeight: '600',
    color: palette.fg,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  paragraph: {
    ...fontFamily,
    fontSize: 16,
    lineHeight: 24,
    color: palette.fg,
    marginBottom: 16,
  },
  link: {
    color: palette.fg,
    textDecorationLine: 'underline',
  },
  list: {
    marginLeft: 16,
    marginBottom: 16,
  },
  listItem: {
    ...fontFamily,
    fontSize: 16,
    lineHeight: 24,
    color: palette.fg,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listItemBullet: {
    width: 16,
    marginRight: 8,
    fontSize: 16,
    lineHeight: 24,
    color: palette.fg,
  },
  listItemText: {
    flex: 1,
  },
});

const responsiveStyles = Platform.OS === 'web' ? {
  '@media (max-width: 980px)': {
    post: {
      padding: 16,
      marginHorizontal: 16,
      marginBottom: 24,
    },
    header: {
      marginLeft: -16,
      marginRight: -16,
      width: '100%',
      paddingHorizontal: 16,
    },
    title: {
      textAlign: 'center',
    },
    wordCount: {
      textAlign: 'center',
    },
  },
  '@media (max-width: 736px)': {
    title: {
      fontSize: 20,
    },
    section: {
      marginTop: 32,
    },
    sectionTitle: {
      fontSize: 14,
    },
  },
} : {};

export default aboutStyles;
