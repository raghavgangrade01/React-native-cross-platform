import { StyleSheet, Platform, Dimensions } from 'react-native';

const HEADER_HEIGHT = Platform.OS === 'web' ? 56 : 56;

const palette = {
  bg: '#f4f4f4',
  border: '#dedede',
  fg: '#3c3b3b',
  fgLight: '#aaaaaa',
  fgBold: '#3c3b3b',
};

const fontFamily = Platform.select({
  web: {
    fontFamily: 'Raleway, Helvetica, sans-serif',
  },
  default: {},
});

const headerStyles = StyleSheet.create({
  container: {
    paddingTop: HEADER_HEIGHT,
  },
  header: {
    display: 'flex' as 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: palette.bg,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    height: HEADER_HEIGHT,
    left: 0,
    position: Platform.OS === 'web' ? 'fixed' as any : 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10000,
  },
  title: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 24,
  },
  titleText: {
    fontSize: Platform.OS === 'web' ? 14 : 16,
    ...fontFamily,
    color: palette.fg,
    fontWeight: '600',
  },
  links: {
    ...Platform.select({
      web: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        borderLeftWidth: 1,
        borderLeftColor: palette.border,
        marginLeft: 24,
        paddingLeft: 24,
      },
      default: {
        display: 'none',
      }
    }),
  },
  linkItem: {
    ...fontFamily,
    color: palette.fg,
    fontSize: Platform.OS === 'web' ? 14 : 16,
    paddingHorizontal: 16,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  firstLinkItem: {
    paddingLeft: 0,
  },
  separator: {
    color: palette.border,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  linkText: {
    ...fontFamily,
    fontSize: 12,
    color: palette.fgLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textDecorationLine: 'none',
  },
  menuButton: {
    ...Platform.select({
      web: {
        display: 'none',
      },
      default: {
        height: '100%',
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: palette.border,
      }
    }),
  },
  menuIcon: {
    fontSize: 24,
    color: palette.fgLight,
  },
  mobileMenu: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    right: 0,
    width: '100%',
    backgroundColor: palette.bg,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    ...fontFamily,
    fontSize: 12,
    color: palette.fgLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default headerStyles;
