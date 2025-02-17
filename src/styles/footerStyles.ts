import { StyleSheet, Platform } from 'react-native';

const palette = {
  bg: '#f4f4f4',
  border: '#dedede',
  fg: '#3c3b3b',
  fgLight: '#aaaaaa',
};

const fontFamily = Platform.select({
  web: {
    fontFamily: 'Raleway, Helvetica, sans-serif',
  },
  default: {},
});

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.bg,
    borderTopWidth: 1,
    borderTopColor: palette.border,
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: '100%',
    ...Platform.select({
      web: {
        marginTop: 'auto',
      },
    }),
  },
  content: {
    ...Platform.select({
      web: {
        maxWidth: 980,
        marginHorizontal: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      default: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      },
    }),
  },
  copyright: {
    ...fontFamily,
    fontSize: 12,
    color: palette.fgLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: Platform.OS === 'web' ? 0 : 16,
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  link: {
    ...fontFamily,
    fontSize: 12,
    color: palette.fgLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textDecorationLine: 'none',
  },
  separator: {
    color: palette.border,
    fontSize: 12,
    marginHorizontal: 8,
  },
  sourceLink: {
    ...fontFamily,
    fontSize: 12,
    color: palette.fgLight,
    textDecorationLine: 'underline',
  },
  '@media (max-width: 980px)': Platform.select({
    web: {
      container: {
        paddingHorizontal: 16,
      },
      content: {
        flexDirection: 'column',
        gap: 16,
      },
    },
    default: {},
  }),
});

export default footerStyles;
