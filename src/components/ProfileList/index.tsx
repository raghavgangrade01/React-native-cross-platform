import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ProfileDetailsData } from '../ProfileDetails';

interface ProfileListProps {
  profiles: ProfileDetailsData[];
  onEdit: (profile: ProfileDetailsData) => void;
  onDelete: (profile: ProfileDetailsData) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, onEdit, onDelete }) => {
  if (profiles.length === 0) {
    return null;
  }

  const handleDelete = (profile: ProfileDetailsData) => {
    const message = 'Are you sure you want to delete this profile?';
    if (Platform.OS === 'web') {
      if (window.confirm(message)) {
        onDelete(profile);
      }
    } else {
      Alert.alert(
        'Delete Profile',
        message,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', onPress: () => onDelete(profile), style: 'destructive' }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Profiles</Text>
      <ScrollView 
        horizontal={Platform.OS !== 'web'}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Platform.OS !== 'web' ? styles.scrollViewContentMobile : styles.scrollViewContentWeb}
      >
        {profiles.map((profile, index) => (
          <View 
            key={index} 
            style={[
              styles.profileCard,
              Platform.OS !== 'web' && styles.profileCardMobile
            ]}
          >
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.detail}>Email: {profile.email}</Text>
              <Text style={styles.detail}>Age: {profile.age}</Text>
              <Text style={styles.detail}>Gender: {profile.gender}</Text>
              <Text style={styles.detail}>State: {profile.state}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => onEdit(profile)}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => handleDelete(profile)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollViewContentWeb: {
    flexDirection: 'column',
  },
  scrollViewContentMobile: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    }),
  },
  profileCardMobile: {
    width: windowWidth * 0.8,
    marginRight: 12,
    marginBottom: 0,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  buttonsContainer: {
    justifyContent: 'center',
    gap: 8,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    minWidth: 70,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 4,
    minWidth: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProfileList;
