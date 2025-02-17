import { StyleSheet, Platform, Dimensions } from 'react-native';

const fontFamily = Platform.select({
  web: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  default: {},
});

const { width } = Dimensions.get('window');
const sidebarWidth = Platform.OS === 'web' ? 250 : 0;

const resumeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'web' ? 56 : 0,
  },
  mainContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    borderWidth: Platform.OS === 'web' ? 1 : 0,
    borderColor: '#dedede',
    padding: Platform.OS === 'web' ? 24 : 16,
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
  sidebar: {
    ...Platform.select({
      web: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: sidebarWidth,
        backgroundColor: '#f5f5f5',
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
        padding: 32,
      },
      default: {
        display: 'none',
      },
    }),
  },
  sidebarTitle: {
    ...fontFamily,
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  sidebarLink: {
    ...fontFamily,
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    paddingVertical: 4,
  },
  sidebarLinkActive: {
    color: '#3b82f6',
  },
  intro: {
    marginBottom: 40,
  },
  introText: {
    ...fontFamily,
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24,
  },
  section: {
    marginBottom: 48,
  },
  sectionTitle: {
    ...fontFamily,
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    paddingBottom: 8,
  },
  educationItem: {
    marginBottom: 32,
  },
  schoolName: {
    ...fontFamily,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  degree: {
    ...fontFamily,
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  year: {
    ...fontFamily,
    fontSize: 14,
    color: '#888',
  },
  experienceItem: {
    marginBottom: 36,
  },
  company: {
    ...fontFamily,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  position: {
    ...fontFamily,
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  daterange: {
    ...fontFamily,
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  bulletPoints: {
    marginLeft: 16,
  },
  bulletPoint: {
    ...fontFamily,
    fontSize: 15,
    color: '#666',
    marginBottom: 8,
    lineHeight: 22,
  },
  skillsSection: {
    marginBottom: 48,
  },
  skillCategory: {
    marginBottom: 32,
  },
  skillCategoryTitle: {
    ...fontFamily,
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  skillGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginHorizontal: -12,
  },
  skillItem: {
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  skillName: {
    ...fontFamily,
    fontSize: 15,
    color: '#666',
    marginBottom: 6,
  },
  skillBarContainer: {
    height: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 3,
    overflow: 'hidden',
  },
  skillBar: {
    height: '100%',
    borderRadius: 3,
  },
  skillLevel: {
    ...fontFamily,
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    marginBottom: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    ...fontFamily,
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
  },
  downloadButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  downloadButtonText: {
    ...fontFamily,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default resumeStyles;
