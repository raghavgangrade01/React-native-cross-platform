import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: Platform.select({
      web: 12,
      default: 16
    }),
    marginVertical: Platform.select({
      web: 8,
      default: 16
    }),
    ...Platform.select({
      web: {
        maxWidth: 500,
        width: '90%',
        marginHorizontal: 'auto',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  formGroup: {
    marginBottom: Platform.select({
      web: 8,
      default: 12
    }),
  },
  label: {
    fontSize: Platform.select({
      web: 13,
      default: 14
    }),
    fontWeight: '600',
    marginBottom: Platform.select({
      web: 4,
      default: 6
    }),
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: Platform.select({
      web: 6,
      ios: 10,
      android: 8
    }),
    fontSize: Platform.select({
      web: 14,
      default: 16
    }),
    backgroundColor: '#fff',
    ...Platform.select({
      web: {
        height: 34,
        outlineStyle: 'none'
      },
    }),
  },
  webSelect: {
    width: '100%',
    height: 34,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: 6,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  mobileSelect: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  selectText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        height: 60,
      },
      ios: {
        height: 150,
      },
    }),
  },
  picker: {
    ...Platform.select({
      android: {
        height: 60,
      },
      ios: {
        height: 150,
      },
    }),
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: Platform.select({
      web: 10,
      default: 14
    }),
    borderRadius: 6,
    alignItems: 'center',
    marginTop: Platform.select({
      web: 12,
      default: 16
    }),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: Platform.select({
      web: 13,
      default: 14
    }),
    fontWeight: '500',
  },
});

export default styles;
